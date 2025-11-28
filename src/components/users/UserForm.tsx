import type { CreateUserDTO, User } from "@/types/user.type";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Content */}
      </DialogContent>
    </Dialog>
  );
} 