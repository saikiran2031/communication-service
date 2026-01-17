"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const Communication = require("../lib/communication-stack");
test('Communication Stack Created', () => {
    const app = new cdk.App({
        context: {
            // Mock the VPC ID parameter lookup
            '/univault/vpcId': 'vpc-12345678',
            // Mock the VPC lookup infrastructure
            'availability-zones:account=123456789012:region=us-east-1': ['us-east-1a', 'us-east-1b'],
            'vpc-provider:account=123456789012:region=us-east-1:vpcId=vpc-12345678': {
                vpcId: 'vpc-12345678',
                availabilityZones: ['us-east-1a', 'us-east-1b'],
                privateSubnetIds: ['subnet-1', 'subnet-2'],
                publicSubnetIds: ['subnet-3', 'subnet-4']
            }
        }
    });
    // WHEN
    const stack = new Communication.CommunicationServiceStack(app, 'MyTestStack', {
        env: { account: '123456789012', region: 'us-east-1' } // Mock env for VPC lookup
    });
    // THEN
    expect(stack).toBeDefined();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbXVuaWNhdGlvbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBRW5DLDREQUE0RDtBQUU1RCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNwQixPQUFPLEVBQUU7WUFDTCxtQ0FBbUM7WUFDbkMsaUJBQWlCLEVBQUUsY0FBYztZQUNqQyxxQ0FBcUM7WUFDckMsMERBQTBELEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1lBQ3hGLHVFQUF1RSxFQUFFO2dCQUNyRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUMvQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7YUFDNUM7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFO1FBQzFFLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLDBCQUEwQjtLQUNuRixDQUFDLENBQUM7SUFDSCxPQUFPO0lBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnYXdzLWNkay1saWIvYXNzZXJ0aW9ucyc7XG5pbXBvcnQgKiBhcyBDb21tdW5pY2F0aW9uIGZyb20gJy4uL2xpYi9jb21tdW5pY2F0aW9uLXN0YWNrJztcblxudGVzdCgnQ29tbXVuaWNhdGlvbiBTdGFjayBDcmVhdGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgLy8gTW9jayB0aGUgVlBDIElEIHBhcmFtZXRlciBsb29rdXBcbiAgICAgICAgICAgICcvdW5pdmF1bHQvdnBjSWQnOiAndnBjLTEyMzQ1Njc4JyxcbiAgICAgICAgICAgIC8vIE1vY2sgdGhlIFZQQyBsb29rdXAgaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgICAgICdhdmFpbGFiaWxpdHktem9uZXM6YWNjb3VudD0xMjM0NTY3ODkwMTI6cmVnaW9uPXVzLWVhc3QtMSc6IFsndXMtZWFzdC0xYScsICd1cy1lYXN0LTFiJ10sXG4gICAgICAgICAgICAndnBjLXByb3ZpZGVyOmFjY291bnQ9MTIzNDU2Nzg5MDEyOnJlZ2lvbj11cy1lYXN0LTE6dnBjSWQ9dnBjLTEyMzQ1Njc4Jzoge1xuICAgICAgICAgICAgICAgIHZwY0lkOiAndnBjLTEyMzQ1Njc4JyxcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHlab25lczogWyd1cy1lYXN0LTFhJywgJ3VzLWVhc3QtMWInXSxcbiAgICAgICAgICAgICAgICBwcml2YXRlU3VibmV0SWRzOiBbJ3N1Ym5ldC0xJywgJ3N1Ym5ldC0yJ10sXG4gICAgICAgICAgICAgICAgcHVibGljU3VibmV0SWRzOiBbJ3N1Ym5ldC0zJywgJ3N1Ym5ldC00J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHN0YWNrID0gbmV3IENvbW11bmljYXRpb24uQ29tbXVuaWNhdGlvblNlcnZpY2VTdGFjayhhcHAsICdNeVRlc3RTdGFjaycsIHtcbiAgICAgICAgZW52OiB7IGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLCByZWdpb246ICd1cy1lYXN0LTEnIH0gLy8gTW9jayBlbnYgZm9yIFZQQyBsb29rdXBcbiAgICB9KTtcbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KHN0YWNrKS50b0JlRGVmaW5lZCgpO1xufSk7XG4iXX0=