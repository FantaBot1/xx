const handler = async (m, {conn}) => {
  m.reply(global.Fem4);
};
handler.command = /^(Fem4|fem4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem4 = `
*VERSUS FEMENINO*

*HORARIO*
*🇵🇪 PERU :*
*🇦🇷 ARGENTINA :*
*🇨🇱 CHILE :*

🌸┇
🌸┇
🌸┇
🌸┇

       *SUPLENTES*

🌸┇
🌸┇

       *DONADORA DE SALA*

🌸┇

*LISTA TH FEM*
`;
