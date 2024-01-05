const handler = async (m, {conn}) => {
  m.reply(global.Fem16);
};
handler.command = /^(Fem16|fem16)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Fem16 = `
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

        *SUPLENTES*

🎀┇
🌸┇

       *DONADORA DE SALA*

🌸┇

       *LISTA TH FEM*
`;
