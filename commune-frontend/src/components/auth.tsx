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

const Auth = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log(formData.get("name"));
  };

  return (
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
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Enter name
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                  name="username"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border outline-none p-1 rounded-sm"
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
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Enter name
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                  name="username"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border outline-none p-1 rounded-sm"
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
  );
};

export default Auth;
