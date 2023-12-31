const handler = async (m, {conn}) => {
  m.reply(global.Drive4);
};
handler.command = /^(Drive4|drive4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Drive4 = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://drive.google.com/drive/u/0/mobile/folders/1kWvht4sSR0ybvlZiI0SAIitCIrNgK_wA
`;
