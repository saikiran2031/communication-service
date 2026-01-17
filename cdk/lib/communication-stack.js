"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationServiceStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
const lambda = require("aws-cdk-lib/aws-lambda");
const path = require("path");
class CommunicationServiceStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define Braze Integration Lambda using NodejsFunction
        const notifyUserLambda = new aws_lambda_nodejs_1.NodejsFunction(this, 'NotifyUserFunction', {
            runtime: lambda.Runtime.NODEJS_18_X,
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
exports.CommunicationServiceStack = CommunicationServiceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbXVuaWNhdGlvbi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24tc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBRW5DLHFFQUErRDtBQUMvRCxpREFBaUQ7QUFDakQsNkJBQTZCO0FBRTdCLE1BQWEseUJBQTBCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDcEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qix1REFBdUQ7UUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGtDQUFjLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3BFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlEQUFpRCxDQUFDO1lBQzlFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxhQUFhLEVBQUUsYUFBYSxFQUFFLHFDQUFxQzthQUN0RTtZQUNELFFBQVEsRUFBRTtnQkFDTixTQUFTLEVBQUUsSUFBSTtnQkFDZixNQUFNLEVBQUUsSUFBSTthQUNmO1lBQ0QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsdUNBQXVDO0lBQzNDLENBQUM7Q0FDSjtBQXRCRCw4REFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBOb2RlanNGdW5jdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEtbm9kZWpzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uU2VydmljZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgICAgIC8vIERlZmluZSBCcmF6ZSBJbnRlZ3JhdGlvbiBMYW1iZGEgdXNpbmcgTm9kZWpzRnVuY3Rpb25cbiAgICAgICAgY29uc3Qgbm90aWZ5VXNlckxhbWJkYSA9IG5ldyBOb2RlanNGdW5jdGlvbih0aGlzLCAnTm90aWZ5VXNlckZ1bmN0aW9uJywge1xuICAgICAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsXG4gICAgICAgICAgICBlbnRyeTogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL3NyYy9hZGFwdGVycy9wcmltYXJ5L2xhbWJkYS9ub3RpZnlVc2VyLnRzJyksXG4gICAgICAgICAgICBoYW5kbGVyOiAnaGFuZGxlcicsXG4gICAgICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgICAgICAgIEJSQVpFX0FQSV9LRVk6ICdUT0RPX1NFQ1JFVCcsIC8vIFNob3VsZCB1c2UgU2VjcmV0cyBNYW5hZ2VyIGluIHByb2RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidW5kbGluZzoge1xuICAgICAgICAgICAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzApLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBHcmFudCBwZXJtaXNzaW9ucyAoUGxhY2Vob2xkZXIpXG4gICAgICAgIC8vIHNlY3JldHMuZ3JhbnRSZWFkKG5vdGlmeVVzZXJMYW1iZGEpO1xuICAgIH1cbn1cbiJdfQ==