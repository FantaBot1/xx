const handler = async (m, {conn}) => {
  m.reply(global.Masc4);
};
handler.command = /^(Masc4|masc4|liga)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Masc4 = `
*VERSUS MIXTO*

*HORARIO*
*🇵🇪 PERU :*
*🇦🇷 ARGENTINA :*
*🇨🇱 CHILE :*

🥷🏻┇
🌸┇
🥷🏻┇
🌸┇

*SUPLENTES*

🥷🏻┇
🌸┇

*DONADOR/RA DE SALA*

 🥷🏻 - 🌸┇


*LISTA TH MIXTO*
`;
