import { CommunicationProvider } from '../../../ports/CommunicationProvider';

// Mocking the Braze Client logic here directly since it's simple
export class BrazeProvider implements CommunicationProvider {

    async sendWelcomeEmail(userId: string, email: string, userName: string): Promise<void> {
        console.log(`[Braze MOCK] Sending Welcome Email to ${email} (${userName})`);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    async sendPushNotification(userId: string, title: string, message: string, extra?: any): Promise<void> {
        console.log(`[Braze MOCK] Push to ${userId}: ${title} - ${message}`, extra);
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    async sendPointsMilestone(userId: string, points: number): Promise<void> {
        console.log(`[Braze MOCK] Points Milestone for ${userId}: ${points} pts`);
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    async trackEvent(userId: string, eventName: string, properties?: any): Promise<void> {
        console.log(`[Braze MOCK] Track Event for ${userId}: ${eventName}`, properties);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}
