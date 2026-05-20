const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'ap-south-1_JPb2gz2z9', // e.g., ap-south-1_xxxxxxxxx
      userPoolClientId: '6c9lps457hgral5qm3qqcamkle', // e.g., 1a2b3c4d5e6f7g8h9i0j1k2l3m
      loginWith: {
        email: true,
      },
    }
  },
  API: {
    baseUrl: 'YOUR_API_GATEWAY_URL' // e.g., https://xxxxxxxxxx.execute-api.ap-south-1.amazonaws.com
  }
};

export default awsConfig;
