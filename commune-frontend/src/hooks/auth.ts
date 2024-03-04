import axios from "axios";

interface UserData {
  name: string;
  username: string;
  password: string;
}

export async function useSignup(data: UserData): Promise<any> {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user/signup",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function useSignin(data: UserData): Promise<any> {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user/signin",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}
