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
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Auth = () => {
  return (
    <Tabs defaultValue="register" className="w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="register">Register</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="register">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create Account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Enter username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter Password
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="border outline-none p-1 rounded-sm"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <button className="bg-[#7A3274] text-white p-2 text-sm rounded-sm">
              Register
            </button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>LogIn</CardTitle>
            <CardDescription>Welcome Back</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-sm">
                  Enter username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border outline-none p-1 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm">
                  Enter Password
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="border outline-none p-1 rounded-sm"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <button className="bg-[#7A3274] text-white  p-2 text-sm rounded-sm">
              Login
            </button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Auth;
