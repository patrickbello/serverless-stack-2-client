const dev = {
  STRIPE_KEY: "pk_test_QQCnXuLCYd4Ux6f3Ex7xtqlz",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app2-api-dev-attachmentsbucket-15lxtqjyo1kwa"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://d56uu8qpsj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_datCUilI7",
    APP_CLIENT_ID: "23bh5q2gbvlllqt3m3jm84bpur",
    IDENTITY_POOL_ID: "us-east-1:5a599aa3-0cf3-412b-85cd-ec6ac6f2e639"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_QQCnXuLCYd4Ux6f3Ex7xtqlz",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app2-api-prod-attachmentsbucket-jzitex7gtax"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://p91bjuptg4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_VBMA9dpxE",
    APP_CLIENT_ID: "2c48r69u0hvbo6b93jkcj6tpa1",
    IDENTITY_POOL_ID: "us-east-1:69b20dd8-821c-4912-a19b-1f16f8e75dd1"
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
