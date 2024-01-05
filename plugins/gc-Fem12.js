const handler = async (m, {conn}) => {
  m.reply(global.Fem12);
};
handler.command = /^(fem12|Fem12)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem12 = `
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

       *ESCUADRA 3*

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
