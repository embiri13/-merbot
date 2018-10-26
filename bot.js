const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame( "๖̶̶̶ۣۣۜۜ͜ζ͜B¥.DANG£R#0191 yapımcısı ");
  console.log(`Bot ${client.user.tag} Adı İle Giriş Yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('***Aleyküm selam,  Hoşgeldin***');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('**Sağol Sanada :clap: :clap:** ');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '+yapımcı') {
    msg.reply('๖̶̶̶ۣۣۜۜ͜ζ͜B¥.DANG£R#0191 çok iyi bir insandır  Buda Kardeşi ☪๖̶̶̶ۣۣۜۜ͜ζ͜|ÔMÛŘ|➊➏☪#9265 Oda Çok İyi Biridir ');
  }
});
client.on("message", message => {

if (message.content ===  "+ping") {
   message.channel.send('**__Geçikme Süresi Hesaplandı :__**').then(message => message.delete(3000));

    const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`Gecikme Süreleri`, client.user.avatarURL)
    .setDescription(`⏳ **| Normal Gecikme** : __[${client.ping}]__  \n📨 **| Mesaj Gecikmesi** : __[${new Date().getTime() - message.createdTimestamp}]__`)
    return message.channel.sendEmbed(pingozel);
}
});

client.login('');
