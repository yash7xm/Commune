import { UserRoundPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

const AddUserDialog = () => {
  const [name, setName] = useState("Pedro Duarte");
  const [username, setUsername] = useState("@peduarte");

  const handleAddUserFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted with name:", name, "and username:", username);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <UserRoundPlus size={18} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>
            Add your friend to have a chat. Click add when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleAddUserFormSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
