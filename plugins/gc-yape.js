const handler = async (m, {conn}) => {
  m.reply(global.yape);
};
handler.command = /^(Yape|Comprar|comprar|yape)$/i;
export default handler;

global.yape = ` 〔 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 〕

 ${taguser}
 
*Hola Si Deseas Comprar El Bot Full El Yape Es :*

*Yape :* 926 933 818
*Nombre : Luis Alberto*
*Precio : 23 Soles*

---------------------------------


*Hola ${taguser} Si Deseas Comprar El Bot Full El Yape Es :*

*Yape :* 926 933 818
*Nombre : Luis Alberto*
*Precio : 15 Soles*

*Mandar Comprobante Al IG : Optimus.Ventas.Bot*
`;
