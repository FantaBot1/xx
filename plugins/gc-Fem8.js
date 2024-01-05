const handler = async (m, {conn}) => {
  m.reply(global.Fem8);
};
handler.command = /^(Fem8|fem8)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem8 = `
*VERSUS FEMENINO*

*HORARIO*
*🇵🇪 PERU :*
*🇦🇷 ARGENTINA :*
*🇨🇱 CHILE :*
*COLOR DE ROPA*

       *ESCUADRA 1*

🎀┇
🌸┇
🌸┇
🌸┇

       *ESCUADRA 2*

🎀┇
🌸┇
🌸┇
🌸┇

        *SUPLENTES*

🎀┇
🌸┇

       *DONADORA DE SALA*

🌸┇

       *LISTA TH FEM*
`;
