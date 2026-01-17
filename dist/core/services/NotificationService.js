"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    async handleRequest(request) {
        console.log(`Processing action: ${request.action} for user: ${request.userId}`);
        switch (request.action) {
            case 'WELCOME_EMAIL':
                await this.provider.sendWelcomeEmail(request.userId, request.data.email, request.data.userName);
                break;
            case 'PUSH_NOTIFICATION':
                await this.provider.sendPushNotification(request.userId, request.data.title, request.data.message, request.data.extra);
                break;
            case 'POINTS_MILESTONE':
                await this.provider.sendPointsMilestone(request.userId, request.data.pointsBalance);
                break;
            case 'TRACK_EVENT':
                await this.provider.trackEvent(request.userId, request.data.eventName, request.data.properties);
                break;
            default:
                console.warn(`Unknown action: ${request.action}`);
        }
    }
}
exports.NotificationService = NotificationService;
