interface UserData {
  name: string;
  username: string;
  password: string;
}

async function useSignup(data: UserData): Promise<boolean> {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("Failed to sign up");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return false;
  }
}

export default useSignup;
