const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar ? ile baslar
• mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
• ping     :: Botun pingini gösterir.
• istatistik :: Bot Istatistik Gosterir.
• sunucubilgi  :: Sunucu Bilgisini Gosterir.
• kullanıcıbilgim :: kullanıcı bilgini gosterir.

    Sayfa 2 / 3 | Yapımcım: Rayban1_`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};
