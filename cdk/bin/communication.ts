#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CommunicationServiceStack } from '../lib/communication-stack';

const app = new cdk.App();
new CommunicationServiceStack(app, 'CommunicationServiceStack', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
