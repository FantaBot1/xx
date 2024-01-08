const handler = async (m, {conn}) => {
  m.reply(global.Interna);
};
handler.command = /^(Interna|Interna)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Interna = `

*BOT PERZONALIZADO 👻*

*_FORMULARIO :_*

NOMBRE DEL BOT : Queso Bot
NUMERO DEL BOT :  +573012050154
EMOJI QUE DESEAS PONER EN EL BOT : ⭐
FOTO DEL BOT : 
TEXTO AL INVOCAR : Queso Te Invoca Plantita Anotate 🤗

*BY : FANTASMIN 👻*

`;
