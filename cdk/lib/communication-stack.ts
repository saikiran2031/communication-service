import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class CommunicationServiceStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Import Shared VPC
        // Use valueFromLookup to get the string value at synthesis time
        const vpcId = ssm.StringParameter.valueFromLookup(this, '/univault/vpcId');
        const vpc = ec2.Vpc.fromLookup(this, 'ImportedVPC', { vpcId });

        // Define Braze Integration Lambda
        const brazeLambda = new lambda.Function(this, 'BrazeWrapperFunction', {
            runtime: lambda.Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('../lambda/brazeWrapper'),
            vpc,
            environment: {
                BRAZE_API_KEY: 'TODO_SECRET', // Should use Secrets Manager in prod
            }
        });

        // Grant permissions (Placeholder)
        // secrets.grantRead(brazeLambda);
    }
}
