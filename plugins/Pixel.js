const handler = async (m, {conn}) => {
  m.reply(global.PixelLab);
};
handler.command = /^(PixelLab|pixellab)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.PixelLab = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://drive.google.com/file/d/1wPwgnjT8NYfjpZjoaIoxls4dhdqh56qr/view?usp=drive_link

`;
