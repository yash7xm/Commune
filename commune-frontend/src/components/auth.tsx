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
    <Tabs defaultValue="account" className="w-[350px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create Account</CardDescription>
          </CardHeader>
          <CardContent>
           <form className="flex flex-col gap-4">
             <div>
                <label htmlFor="" className="text-sm">Enter username</label>
                <input type="text" placeholder="Username" className="border outline-none p-1 rounded-sm"/>
             </div>
             <div>
                <label htmlFor="" className="text-sm">Enter Password</label>
                <input type="text" placeholder="Password" className="border outline-none p-1 rounded-sm"/>
             </div>
           </form>
          </CardContent>
          <CardFooter>
            <button className="bg-slate-200 p-2 text-sm rounded-sm">Register</button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default Auth;
