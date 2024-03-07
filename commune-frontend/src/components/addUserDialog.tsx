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
import { addFriend } from "../hooks/channel";
import { useSetAtom } from "jotai";
import channelsAtom from "../atoms/channels-atom";
import { getAllChannels, filterChannelName } from "../hooks";
import { Toaster, toast } from "sonner";

const AddUserDialog = () => {
  const [name, setName] = useState("Pedro Duarte");
  const [username, setUsername] = useState("@peduarte");
  const setChannels = useSetAtom(channelsAtom);

  const handleAddUserFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const data = {
      organization: "org1",
      type: "direct message",
      username: username,
    };

    const channelAdd = await addFriend(data);
    if (channelAdd.success) {
      const response = await getAllChannels();
      const res = await filterChannelName(response.data);
      setChannels(res);
      toast(channelAdd.message);
    } else {
      console.log(channelAdd);
      if (channelAdd.error) {
        toast(channelAdd.message, {
          description: channelAdd.error.explanation[0],
        });
      } else {
        toast(channelAdd.explanation);
      }
    }
  };

  return (
    <>
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
      <Toaster></Toaster>
    </>
  );
};

export default AddUserDialog;
