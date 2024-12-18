const URL = "https://api.telegram.org/bot";

const sendMessageToTelegramBot = async (req, res) => {
  const { name, size, chatId, url } = req.body;

  const message = `El producto ${name} talla ${size} ha entrado en stock.`;

  //Add <Button to open product

  const telegramUrl =
    URL +
    process.env.TELEGRAM_TOKEN +
    "/sendMessage?" +
    new URLSearchParams({
      chat_id: chatId,
      text: "prueba",
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: "Abrir Google", url: "https://www.google.com" }],
        ],
      }),
    });

  const response = await fetch(telegramUrl);

  console.log("Pedro ===> response", response);

  if (response.ok) {
    res.status(200).send({ message: "Message sended" });
  } else {
    res.status(400).send({ message: "Error sending message" });
  }
};

export default sendMessageToTelegramBot;
