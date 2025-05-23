const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Spaxite.aternos.me',
  port: 41511,
  username: 'MonBotRailway'
});

bot.on('spawn', () => {
  console.log('Bot connecté au serveur !');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  if (message === 'salut') {
    bot.chat('Salut ' + username + ' ! Je suis un bot sur Railway :)');
  }
});

bot.on('error', err => console.log('Erreur:', err));
bot.on('end', () => {
  console.log('Bot déconnecté, tentative de reconnexion dans 5s...');
  setTimeout(() => bot.connect(), 5000);
});
