toconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email "oyindamolaanishile@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Scarlett/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348035107573,234xxxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxxxx,234xxxxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Pearl",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Pearl,

  sessionName:process.env.SUHAIL_09_14_10_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhOUJuZFBqZzIyK1lLdE8wSE1mbFc5UHBlNWE2dkl3emkwdDBCTmE5eVFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzbmdXREQ0MlFiLXh3VE1Gb3RGZVZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0MWIyN2ZiLTkzYzEtNDVkYi05NzIwLTU3ODE4YjQ4ZGNiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTM4LFxuICAgICAgMixcbiAgICAgIDE5OCxcbiAgICAgIDE2NyxcbiAgICAgIDI4LFxuICAgICAgNjMsXG4gICAgICAxNzYsXG4gICAgICAxOTIsXG4gICAgICAxNzgsXG4gICAgICAxMzMsXG4gICAgICAxOTEsXG4gICAgICAyMjAsXG4gICAgICAxMjgsXG4gICAgICAyMzEsXG4gICAgICAyMzgsXG4gICAgICA2NyxcbiAgICAgIDExMCxcbiAgICAgIDIyMSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAzNSxcbiAgICAgIDU5LFxuICAgICAgMjEsXG4gICAgICAyMjYsXG4gICAgICAyMjksXG4gICAgICAxODksXG4gICAgICAxNDAsXG4gICAgICA4NCxcbiAgICAgIDIyMSxcbiAgICAgIDIxNCxcbiAgICAgIDIzNyxcbiAgICAgIDEzNSxcbiAgICAgIDI1NSxcbiAgICAgIDEyNCxcbiAgICAgIDIyMSxcbiAgICAgIDQ2LFxuICAgICAgOTksXG4gICAgICAxMDQsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEZXSFA0RkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzUxMDc1NzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzMTU5MzgzNjg3Mzk4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3ZIdzRZQkVQUHd6YmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYS0NLUlBrc085Q0d3MnpDWjhPN09xcFBoN082ejJKVTdGNjNCZlpkMEN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRYR04wSnFEbGJDZXJqT0RhVFdNdnVYR0F5NktyWWU0SEhZN092ZGZwbitYQmJndXBZb1JhQ0t6cjUzNjIrZFdBMmRSSzVzSlhjVXlCQVQxNWc2bkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFVdTMwTXV1U2ZnaGEveE4xLzZoRkw3b1dwVytoSmhrY1BROWVVUFc2MHZWVCtRTVNKKy85Tmtxdk5RUHZkMlNRTk1wKzNHbmhjcUltOFRHdU5Hcmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzUxMDc1NzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MzI5MjcxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ== || "",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "PEARL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
