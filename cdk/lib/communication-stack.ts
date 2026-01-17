import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CommunicationServiceStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define Braze Integration Lambda using NodejsFunction
        const notifyUserLambda = new NodejsFunction(this, 'NotifyUserFunction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            entry: path.join(__dirname, '../../src/adapters/primary/lambda/notifyUser.ts'),
            handler: 'handler',
            environment: {
                BRAZE_API_KEY: 'TODO_SECRET', // Should use Secrets Manager in prod
            },
            bundling: {
                sourceMap: true,
                minify: true,
            },
            timeout: cdk.Duration.seconds(30),
        });

        // Grant permissions (Placeholder)
        // secrets.grantRead(notifyUserLambda);
    }
}
