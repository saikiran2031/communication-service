import { Handler } from 'aws-lambda';
import { BrazeProvider } from '../../secondary/providers/BrazeProvider';
import { NotificationService } from '../../../core/services/NotificationService';
import { NotificationRequest } from '../../../core/models/Notification';

const provider = new BrazeProvider();
const service = new NotificationService(provider);

export const handler: Handler = async (event) => {
    try {
        console.log("Communication Service received:", JSON.stringify(event));

        // Handle SNS Records or Direct Invocation
        const payload = event.Records ? JSON.parse(event.Records[0].Sns.Message) : event;

        // Basic validation
        if (!payload.action || !payload.userId) {
            throw new Error('Invalid payload: Missing action or userId');
        }

        const request: NotificationRequest = {
            action: payload.action,
            userId: payload.userId,
            data: payload.data || {}
        };

        await service.handleRequest(request);

        return { statusCode: 200, body: JSON.stringify({ success: true }) };

    } catch (error: any) {
        console.error("Communication Service Error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
