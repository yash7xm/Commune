import axios from "axios";

interface UserData {
  name: string;
  username: string;
  password: string;
}

async function useSignup(data: UserData): Promise<any> {
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

export default useSignup;
