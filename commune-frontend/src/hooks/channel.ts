import axios from "axios";

export async function addFriend(data: any) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/channel/addFriend",
      data,
      {
        headers: {
          "x-access-token": `${localStorage.getItem("commune-jwt")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error.response.data;
  }
}
