const kafka = require("./client");
const { Partitioners } = require("kafkajs");

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner,
});

async function produceMessage(message) {
  await producer.connect();
  await producer.send({
    topic: "send-message",
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
}

module.exports = { produceMessage };
