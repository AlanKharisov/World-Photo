const { google } = require('google-auth-library');
const fs = require('fs');

async function getAccessToken() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/service-account-file.json', // Укажите путь к JSON-файлу сервисного аккаунта
    scopes: ['https://www.googleapis.com/auth/drive']
  });

  const authClient = await auth.getClient();
  const accessToken = await authClient.getAccessToken();
  console.log("Access Token:", accessToken);
}

getAccessToken().catch(console.error);
