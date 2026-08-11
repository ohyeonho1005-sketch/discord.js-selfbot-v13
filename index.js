const { Client } = require('./src'); // 현재 폴더의 라이브러리 불러오기
const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.username} 계정으로 셀프봇 켜짐!`);
  client.user.setPresence({ status: 'online' });
});

client.login(process.env.TOKEN);
