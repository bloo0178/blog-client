/*export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-jbloom"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://aclaaa6zx3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_k7pxH2uMw",
    APP_CLIENT_ID: "60sd457sb2oiok29ns73jmajjg",
    IDENTITY_POOL_ID: "us-east-1:7c885a43-dc81-4bd8-9201-6d49f79117e9"
  }
};*/


const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-t46tp66muc1v"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://arwlo5i2b5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2XYEqzBaH",
    APP_CLIENT_ID: "6h3edpkm1m359rbmrc3bj0vf8q",
    IDENTITY_POOL_ID: "us-east-1:b1b8cfe3-49ef-4f26-a7a8-8328fa2c229c"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-wotqiy457ihl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://f5ms602eg2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_VFzDyXmGx",
    APP_CLIENT_ID: "9gkksuavir58pm0o9q30etvdc",
    IDENTITY_POOL_ID: "us-east-1:9aeb3b40-b961-45fd-aff4-ef7d8222a0ba"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
