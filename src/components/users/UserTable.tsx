import type { User } from "@/types/user.type"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";


interface Props {
  users: User[],
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}


const UserTable = ({ users, onEdit, onDelete }: Props) => {

  return (
    <Table>
      <TableCaption>List of Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No.</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Avatar</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell>{user.fullname}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.job}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{ }</TableCell>
            <TableCell className="flex flex-col gap-1 mx-5">
              <Button onClick={() => onEdit(user)}>Edit</Button>
              <Button className="bg-red-500" onClick={() => onDelete(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  )
}

export default UserTable