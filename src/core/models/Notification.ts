export type NotificationAction =
    | 'WELCOME_EMAIL'
    | 'PUSH_NOTIFICATION'
    | 'POINTS_MILESTONE'
    | 'TRACK_EVENT';

export interface NotificationRequest {
    action: NotificationAction;
    userId: string;
    data: any;
}

export interface WelcomeEmailData {
    email: string;
    userName: string;
}

export interface PushNotificationData {
    title: string;
    message: string;
    extra?: any;
}

export interface PointsMilestoneData {
    pointsBalance: number;
}
