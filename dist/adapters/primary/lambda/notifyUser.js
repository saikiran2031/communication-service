"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const BrazeProvider_1 = require("../../secondary/providers/BrazeProvider");
const NotificationService_1 = require("../../../core/services/NotificationService");
const provider = new BrazeProvider_1.BrazeProvider();
const service = new NotificationService_1.NotificationService(provider);
const handler = async (event) => {
    try {
        console.log("Communication Service received:", JSON.stringify(event));
        // Handle SNS Records or Direct Invocation
        const payload = event.Records ? JSON.parse(event.Records[0].Sns.Message) : event;
        // Basic validation
        if (!payload.action || !payload.userId) {
            throw new Error('Invalid payload: Missing action or userId');
        }
        const request = {
            action: payload.action,
            userId: payload.userId,
            data: payload.data || {}
        };
        await service.handleRequest(request);
        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    }
    catch (error) {
        console.error("Communication Service Error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
exports.handler = handler;
