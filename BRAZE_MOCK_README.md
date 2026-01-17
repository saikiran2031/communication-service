# Testing Mock Braze Integration

You can test the mock Braze wrapper directly:

```javascript
// Test script
const payload = {
    action: 'WELCOME_EMAIL',
    userId: 'test-user-123',
    data: {
        email: 'test@univault.co',
        userName: 'John Doe'
    }
};

// Invoke Lambda (would need AWS SDK)
// OR check CloudWatch Logs after deployment
```

## What Gets Logged

Instead of sending real emails/push notifications, the mock client logs what it **would** send:

```
[Braze Mock] Would send welcome email:
{
  userId: 'test-user-123',
  email: 'test@univault.co',
  userName: 'John Doe',
  template: 'welcome_email',
  subject: 'Welcome to UniVault!',
  preview: 'Hi John Doe, earn rewards on every purchase...'
}
```

## Switching to Real Braze

When you get API keys, simply:
1. Replace `mockBrazeClient.js` with a real Braze SDK implementation
2. Update environment variables with real keys
3. No other code changes needed!
