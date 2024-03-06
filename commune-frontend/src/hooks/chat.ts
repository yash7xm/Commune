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

export async function filterChannelName(data: any) {
  await Promise.all(
    data.map(async (channel: any) => {
      if (channel.channelDetail.type === "direct message") {
        const users = channel.channelDetail.name.split("~");
        console.log(users);
        if (users[0] != channel.userId) {
          const user = await fetchUser(users[0]);
          channel.channelDetail.name = user.name;
        } else {
          const user = await fetchUser(users[1]);
          channel.channelDetail.name = user.name;
        }
      }
    })
  );
  return data;
}

async function fetchUser(userId: any) {
  try {
    const user = await axios.get(`http://localhost:8080/api/v1/user/${userId}`);
    return user.data.data;
  } catch (error: any) {
    return error.response.data;
  }
}
