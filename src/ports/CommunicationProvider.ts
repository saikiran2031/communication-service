export interface CommunicationProvider {
    sendWelcomeEmail(userId: string, email: string, userName: string): Promise<void>;
    sendPushNotification(userId: string, title: string, message: string, extra?: any): Promise<void>;
    sendPointsMilestone(userId: string, points: number): Promise<void>;
    trackEvent(userId: string, eventName: string, properties?: any): Promise<void>;
}
