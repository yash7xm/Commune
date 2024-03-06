import axios from "axios";

export async function getAllChannels() {
  try {
    const channels = await axios.get(
      "http://localhost:8080/api/v1/channel/getAll",
      {
        headers: {
          "x-access-token": `${localStorage.getItem("commune-jwt")}`,
        },
      }
    );
    return channels.data;
  } catch (error: any) {
    return error.response.data;
  }
}
