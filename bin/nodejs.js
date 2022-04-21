#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { NodejsStack } = require('../lib/nodejs-stack');

const app = new cdk.App();
new NodejsStack(app, 'NodejsStack', {
});