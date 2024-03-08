import axios from "axios";

export async function sendMessage(data: object) {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/v1/msg/send",
      data,
      {
        headers: {
          "x-access-token": `${localStorage.getItem("commune-jwt")}`,
        },
      }
    );
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

export async function getAllMessages(channelId: any) {
  try {
    const messages = await axios.get(
      `http://localhost:8080/api/v1/msg/getAll/${channelId}`
    );
    console.log(messages);
    return messages.data.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}
