import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Communication from '../lib/communication-stack';

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
