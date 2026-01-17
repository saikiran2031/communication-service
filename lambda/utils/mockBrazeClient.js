/**
 * Mock Braze Client
 * Simulates Braze API calls for development/demo without real credentials
 */

class MockBrazeClient {
    constructor() {
        this.apiKey = process.env.BRAZE_API_KEY || 'mock_braze_key';
        this.endpoint = process.env.BRAZE_ENDPOINT || 'https://mock.braze.com';
        console.log(`[Braze Mock] Initialized with endpoint: ${this.endpoint}`);
    }

    /**
     * Mock: Send welcome email
     */
    async sendWelcomeEmail(userId, email, userName) {
        console.log(`[Braze Mock] Would send welcome email:`);
        console.log({
            userId,
            email,
            userName,
            template: 'welcome_email',
            subject: 'Welcome to UniVault!',
            preview: `Hi ${userName}, earn rewards on every purchase...`
        });
        return { success: true, messageId: `mock_${Date.now()}` };
    }

    /**
     * Mock: Send push notification
     */
    async sendPushNotification(userId, title, message, data = {}) {
        console.log(`[Braze Mock] Would send push notification:`);
        console.log({
            userId,
            title,
            message,
            data,
            platform: 'ios'
        });
        return { success: true, messageId: `mock_push_${Date.now()}` };
    }

    /**
     * Mock: Track custom event
     */
    async trackEvent(userId, eventName, properties = {}) {
        console.log(`[Braze Mock] Would track event:`);
        console.log({
            userId,
            eventName,
            properties,
            timestamp: new Date().toISOString()
        });
        return { success: true };
    }

    /**
     * Mock: Update user attributes
     */
    async updateUserAttributes(userId, attributes) {
        console.log(`[Braze Mock] Would update user attributes:`);
        console.log({
            userId,
            attributes
        });
        return { success: true };
    }

    /**
     * Mock: Send points milestone notification
     */
    async sendPointsMilestone(userId, pointsBalance) {
        console.log(`[Braze Mock] Would send points milestone notification:`);
        console.log({
            userId,
            template: 'points_milestone',
            pointsBalance,
            title: `You've earned ${pointsBalance} points!`,
            message: 'Redeem them for amazing rewards'
        });
        return { success: true, messageId: `mock_milestone_${Date.now()}` };
    }
}

// Singleton instance
let brazeClient;

function getBrazeClient() {
    if (!brazeClient) {
        brazeClient = new MockBrazeClient();
    }
    return brazeClient;
}

module.exports = {
    getBrazeClient,
    MockBrazeClient
};
