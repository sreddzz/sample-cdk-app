const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Nodejs = require('../lib/nodejs-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Nodejs.NodejsStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {
        "S3Bucket07682993": {
          "Type": "AWS::S3::Bucket",
          "Properties": {
            "BucketName": {
              "Fn::Join": [
                "",
                [
                  "demo-",
                  {
                    "Ref": "AWS::AccountId"
                  }
                ]
              ]
            }
          },
          "UpdateReplacePolicy": "Retain",
          "DeletionPolicy": "Retain"
        }
      }
    }, MatchStyle.EXACT))
});