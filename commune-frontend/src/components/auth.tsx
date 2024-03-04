import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { useSignup, useSignin } from "../hooks";
import { useState } from "react";
import { Toaster, toast } from "sonner";

interface UserData {
  name: string;
  username: string;
  password: string;
}

const Auth = () => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await useSignup(formData);
    if (res.success) {
      toast(res.message);
    } else {
      toast(res.message, {
        description: res.error.explanation[0],
      });
    }
  };

  const handleSigninForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const res = await useSignin(formData);
    if (res.success) {
      toast(res.message);
    } else {
      toast(res.message, {
        description: res.error.explanation,
      });
    }
    console.log(res);
  };

  return (
    <>
      <Tabs defaultValue="signup" className="w-[350px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="signin">SignIn</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>Create Account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignupForm} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Enter name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-1"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="text-sm">
                    Enter username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="p-1"
                    name="username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-1"
                    name="password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#7A3274] text-white p-2 text-sm rounded-sm w-[25%]"
                >
                  Register
                </button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>SignIn</CardTitle>
              <CardDescription>Welcome Back</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSigninForm} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Enter name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-1"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="username" className="text-sm">
                    Enter username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="p-1"
                    name="username"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-1"
                    name="password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#7A3274] text-white p-2 text-sm rounded-sm w-[25%]"
                >
                  SignIn
                </button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Toaster className="bg-slate-200"></Toaster>
    </>
  );
};

export default Auth;
