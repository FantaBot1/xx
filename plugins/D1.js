const handler = async (m, {conn}) => {
  m.reply(global.Drive1);
};
handler.command = /^(Drive1|drive1)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Drive1 = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://drive.google.com/drive/folders/148_l0Rxkfmm9AWMxwN-oMG4x2706whAv
`;
