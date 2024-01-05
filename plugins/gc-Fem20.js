const handler = async (m, {conn}) => {
  m.reply(global.Fem20);
};
handler.command = /^(Fem20|fem20)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem20 = `
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

       *ESCUADRA 4*

🎀┇
🌸┇
🌸┇
🌸┇

       *ESCUADRA 5*

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
