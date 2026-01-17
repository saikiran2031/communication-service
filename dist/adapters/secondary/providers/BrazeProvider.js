"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrazeProvider = void 0;
// Mocking the Braze Client logic here directly since it's simple
class BrazeProvider {
    async sendWelcomeEmail(userId, email, userName) {
        console.log(`[Braze MOCK] Sending Welcome Email to ${email} (${userName})`);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    async sendPushNotification(userId, title, message, extra) {
        console.log(`[Braze MOCK] Push to ${userId}: ${title} - ${message}`, extra);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    async sendPointsMilestone(userId, points) {
        console.log(`[Braze MOCK] Points Milestone for ${userId}: ${points} pts`);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    async trackEvent(userId, eventName, properties) {
        console.log(`[Braze MOCK] Track Event for ${userId}: ${eventName}`, properties);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
exports.BrazeProvider = BrazeProvider;
