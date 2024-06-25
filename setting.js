/*
BASE : HW MODS
RECODE : AKMAL MODS 🔥
WA REKBER : 62859162612719
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "isi no owner lu gan"
global.namabot = "MODS JB"
global.botname = "MODS JB"
global.autoJoin = true
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'zhirasession' //Gausah Juga
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "AKMAL STORE"

global.namastore = "MODS JB"
global.nodana = "isi no dana"
global.nogopay = "isi no gopay"
global.noovo = "isi no ovo"
global.qris = "isi link qris"

global.youtubehamxzz = "AkmalMods"
global.instagramzhamxz = "akmal_mods"
global.tiktokzhir = "TIDAK PUNYA YA"
global.grupjbzhir = "https://whatsapp.com/channel/0029VaZjmLq2v1IyjGKp6P0U"
const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "sukses✅ Bang",
   save: "DONE SV✅",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Khusus Didalam Grup!",
       private: "Fitur Khusus Private!",
       owner: "Fitur Khusus Owner!",
       admin: "Fitur Khusus Admin Grup!",
       badmin: "Bot Bukan Admin Grup!",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})