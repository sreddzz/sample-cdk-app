const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const { Aws } = require('@aws-cdk/core');

class NodejsStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new s3.Bucket(this, "S3Bucket", {bucketName: `demo-${Aws.ACCOUNT_ID}`})

  }
}

module.exports = { NodejsStack }
