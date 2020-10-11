const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Yetkili komutlar | Not:Komutlar ? ile baslar
  • istatistik      :: Bot Istatistiligini Gosterir.
  • ban   :: İstediğiniz kişiyi sunucudan yasaklar.
  • kick    :: İstediğiniz kişiyi sunucudan atar.
  • sustur  :: İstediğiniz kişiyi susturur.
  • temizle :: Mesajları siler.
  • uyar    :: İstediğiniz kişiye uyarı verir.
  • duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
  • kilit :: Odayı yazı yazmaya kapatır.
  • unban  :: Ban Kaldirir.
    Sayfa 3 / 3 | Yapımcım: Rayban1_`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
