const kafka = require("./client");

const consumer = kafka.consumer({ groupId: "chat-consumer-group" });
const topic = "send-message";

async function consumeMessages(io) {
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const kafkaMessage = JSON.parse(message.value.toString());
      console.log(`Received message: ${JSON.stringify(kafkaMessage)}`);

      // Emit message to the corresponding room
      io.to(`room-${kafkaMessage.channelId}`).emit("msg_rcvd", kafkaMessage);
    },
  });
}

module.exports = { consumeMessages };
