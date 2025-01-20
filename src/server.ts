import { create, Whatsapp } from "venom-bot";

create({
  session: "testezap", // You can customize the session name
})
  .then((client: Whatsapp) => start(client))
  .catch((error) => console.log(error));

function start(client: Whatsapp) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === "hello") {
      client.sendText(message.from, "Hi there! How can I help you today?");
    } else {
      client.sendText(message.from, "Sorry, I did not understand that.");
    }
  });
}
