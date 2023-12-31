const handler = async (m, {conn}) => {
  m.reply(global.Lineas);
};
handler.command = /^(Lineas|lineas|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Lineas = `
👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗜𝗡 𝗕𝗢𝗧 👻

*LINK* https://mega.nz/folder/7epCiSbb#Vpx3e3Q5Aws-F-eOuE2O6Q
`;
