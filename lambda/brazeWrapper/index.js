const { getBrazeClient } = require('../utils/mockBrazeClient');

/**
 * Braze Wrapper Lambda
 * Handles all marketing automation via Braze (mocked for now)
 */
exports.handler = async (event) => {
    console.log("Braze Wrapper received:", JSON.stringify(event));

    const braze = getBrazeClient();

    try {
        // Parse SNS or direct invocation
        const payload = event.Records
            ? JSON.parse(event.Records[0].Sns.Message)
            : event;

        const { action, userId, data } = payload;

        switch (action) {
            case 'WELCOME_EMAIL':
                await braze.sendWelcomeEmail(userId, data.email, data.userName);
                break;

            case 'PUSH_NOTIFICATION':
                await braze.sendPushNotification(userId, data.title, data.message, data.extra);
                break;

            case 'POINTS_MILESTONE':
                await braze.sendPointsMilestone(userId, data.pointsBalance);
                break;

            case 'TRACK_EVENT':
                await braze.trackEvent(userId, data.eventName, data.properties);
                break;

            default:
                console.log(`Unknown action: ${action}`);
        }

        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        console.error("Braze Wrapper Error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
