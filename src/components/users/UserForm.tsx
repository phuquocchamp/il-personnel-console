import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import type { CreateUserDTO, User } from "@/types/user.type";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "../ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";


interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserDTO | Partial<User>) => void;
  defaultValues?: User | null;
}

export default function UserForm({ open, onClose, onSubmit, defaultValues }: Props) {
  const [form, setForm] = useState({
    fullname: defaultValues?.fullname ?? "",
    age: defaultValues?.age ?? undefined,
    location: defaultValues?.location ?? "",
    job: defaultValues?.job ?? "",
    avatarUrl: defaultValues?.avatarUrl ?? ""
  });

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create/Edit User</DialogTitle>
            <DialogDescription>
              Fill the form below to create or edit a user.
            </DialogDescription>
          </DialogHeader>

          {/* Dialog Content */}
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="fullname">Fullname</Label>
              <Input id="fullname" name="fullname" defaultValue="Nguyen Van A" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" defaultValue="25" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue="Ha Noi" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="job">Job</Label>
              <Input id="job" name="job" defaultValue="Student" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="avatarUrl">Avatar URL</Label>
              <Input id="avatarUrl" name="avatarUrl" defaultValue="https://via.placeholder.com/150" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>

        </DialogContent>
      </form>
    </Dialog>
  );
} 