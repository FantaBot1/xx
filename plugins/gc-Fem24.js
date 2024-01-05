const handler = async (m, {conn}) => {
  m.reply(global.Fem24);
};
handler.command = /^(Fem24|fem24)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem24 = `
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

       *ESCUADRA 6*

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
