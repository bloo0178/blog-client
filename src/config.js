export default {
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
};
