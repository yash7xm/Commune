const kafka = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting ...");
  admin.connect();
  console.log("Admin connecting successfull ...");

  console.log("creating topic [send-message]");
  await admin.createTopics({
    topics: [
      {
        topic: "send-message",
        numPartitions: 2,
      },
    ],
  });
  console.log("created topic [send-message]");

  console.log("Disconnecting Admin .. ");
  await admin.disconnect();
}

init();
