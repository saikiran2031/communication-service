const axios = require('axios');

/**
 * BRAZE TRANSACTIONAL WRAPPER
 * Triggers: via API Gateway or Direct Lambda Invoke from Identity Service
 * Use Case: High priority functional messages (OTP, Receipts)
 */
exports.handler = async (event) => {
    console.log('Braze Wrapper Triggered:', JSON.stringify(event, null, 2));

    const BRAZE_API_KEY = process.env.BRAZE_API_KEY;
    const BRAZE_REST_ENDPOINT = process.env.BRAZE_REST_ENDPOINT || 'https://rest.iad-01.braze.com';

    if (!BRAZE_API_KEY) {
        console.error("Missing BRAZE_API_KEY");
        return { statusCode: 500, body: "Configuration Error" };
    }

    try {
        // Parse incoming request (Expects: { userId, templateId, data })
        const payload = typeof event.body === 'string' ? JSON.parse(event.body) : event;
        const { userId, externalUserId, templateId, campaignId, messages } = payload;

        // Construct Braze Payload (Transactional Send)
        // Ref: https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_messages/
        const brazeBody = {
            api_key: BRAZE_API_KEY,
            external_user_ids: [externalUserId || userId],
            messages: messages || {
                email: {
                    app_id: process.env.BRAZE_APP_ID,
                    template_id: templateId,
                    // Or raw body/subject if no template
                }
            }
        };

        // If simple campaign trigger
        if (campaignId) {
            brazeBody.campaign_id = campaignId;
        }

        console.log("Sending to Braze:", JSON.stringify(brazeBody));

        const response = await axios.post(`${BRAZE_REST_ENDPOINT}/messages/send`, brazeBody, {
            headers: { 'Content-Type': 'application/json' }
        });

        console.log("Braze Response:", response.data);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, brazeId: response.data.dispatch_id }),
        };

    } catch (error) {
        console.error("Braze API Error:", error.response ? error.response.data : error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send to Braze", details: error.message }),
        };
    }
};
