import { userApi } from "@/api/user.api";
import type { User } from "@/types/user.type"
import { useEffect, useState } from "react"

export const fetchUsers = () => { 
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    setLoading(true);
    userApi
      .getAll()
      .then((res) => {
        setData(res)
      })
      .finally(() => setLoading(false))
    
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return { data, loading, reload: loadUsers };
}

export const getUserById = (id: string) => {
  return {};
}

export const updateUserById = (id: string) => {
  return {}
}

export const deleteUserById = (id: string) => {
  return {}
}

