
require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Toxxic-Boy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "2349078437844", // Your WhatsApp number

    sudo: process.env.SUDO ? process.env.SUDO.split(",") : ["2348165846414"," 2347042081220"], // People Who can use the bot even in Private mode

    mode: process.env.MODE || "private", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "recording", // Bot presence status

    autoRead: process.env.AUTO_READ === "false", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "false", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "false", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNhYXpmNFQyTjZDY0E5UmRONStnd0FaYkhHMXRWclJReEdvd1Y5Mi9HRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXJxQ3RLR09XNXgvUlA0c2J5cTU5UHFpSEdyVzJVdFZPU3NKRytCMDcyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSW9VNTRwWDcrMUtNaE1MdDdyTGhNb0ppeVYwTjlSajVEcVZNL0loaDJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyd0xFdC95T2pwS01IVkJGbVBhazRLa1V5VmJmVk9NL2tnczVTbWVQOUNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGb2YwdW9IMUxudVRqWXZBVHIvSjZ1OUcrb2dVdU5VM1I1Qk96Um9OMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw3Zi9POFZCT3lLK3FyNVZDWHBJQ1lhV3VFMUU2dFpXU1MwQTNMMENlaU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVVMlU5WWkvbWJ4VEZzbVIwOG1KMXVBMlJkb1ZpZUZ1MHNzbHpxMXVHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnFZV2V5T0Eyam9qQ2F1dm9xTzJDdHdmWlhVQ0x2UTVkRVF5dHFic1RRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklocGtpVTgzUWhIUG82NCtET1c1OHBpQ1FKS3FKYzVwcnA5eFd6S095VGZrUHpHcCtWSUcwSkc0azhtQjdDS0xIRTl1R3p1S1k3SXFKeG9WbTUwQURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6IjlFSlV5WjBiVUtHc0orZ25FbmpEckt6czVwcXZUdEdscHJSdnEzWUVLZjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3ODQzNzg0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RDEwRjNEQkFBNERFMDQwMUQzRTQyNDNBMzM5OUQyRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2NzIwNjg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDc4NDM3ODQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU2OTY4NjY1MjA1N0Y0OEIxMDZDRTU2OTBEMjY1NDRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzY3MjA2ODd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk0TVFZV0IyIiwibWUiOnsiaWQiOiIyMzQ5MDc4NDM3ODQ0OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR2xpdGNoIiwibGlkIjoiMTQxMzA0OTc3NzI3NTU5OjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU0V0N29ERUtDQ2tid0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhVk1UK1NKMjBSOWFzMVVSYlM3WEV4bjIzdXRSYWJSZzVkUHdER3k3UURBPSIsImFjY291bnRTaWduYXR1cmUiOiJwSHF1VG96a2lWNng3Vk1hUndCclU5OXlsNzRLaGdxbGtVcmF1dGhTUkVQTWlUTG05ZzJsWm1ZL21tVG9sbFFWbDJyVE01UEpLNExjQzRSK2tuSW5CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieC84S285bkxKanpuNHZYYVZFbnM0dzBYZ2NvUXN4TzdaNDRXaUg0K1dXMWZlQm5lTldETGM5c09nT0QxVEh2bDhuSmYxL3NVUlJRTGZLQ0RYSU01Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc4NDM3ODQ0OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2xURS9raWR0RWZXck5WRVcwdTF4TVo5dDdyVVdtMFlPWFQ4QXhzdTBBdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NzIwNjg1LCJsYXN0UHJvcEhhc2giOiIzeFhXWVoiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNjZyJ9", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED === "false", // Auto-reject calls feature (true or false)
};
