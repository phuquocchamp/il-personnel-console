import { Button } from "@/components/ui/button";
import UserForm from "@/components/users/UserForm";
import UserTable from "@/components/users/UserTable";
import { fetchUsers } from "@/hooks/useUsers";
import type { User } from "@/types/user.type";
import { useState } from "react";

export default function UsersPage() {
  const { data, loading, reload } = fetchUsers();
  const [open, setOpen] = useState(false)
  const [editUser, setEditUser] = useState<User | null>(null);

  // CREATE
  const handleCreate = async (data: any) => {
    reload();
  }

  // UPDATE
  const handleUpdate = async (data: any) => {

    reload();
  }

  // DELETE
  const handleDelete = async (data: any) => {

    reload();
  }


  if (loading) return <p>Loading...</p>;

  return (
    <div>

      <Button onClick={() => {
        setOpen(true);
        setEditUser(null);
      }}>New User</Button>

      <UserTable
        users={data}
        onEdit={(user) => { setEditUser(user); setOpen(true) }}
        onDelete={handleDelete}
      />

      <UserForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={editUser ? handleUpdate : handleCreate}
        defaultValues={editUser}
      />
    </div>
  );
}
