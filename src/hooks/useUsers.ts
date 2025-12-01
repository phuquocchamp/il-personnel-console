import { userApi } from "@/api/user.api";
import type { User } from "@/types/user.type"
import { useEffect, useState } from "react"

export const fetchUsers = () => { 
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    setLoading(true);
    userApi
      .getAllUsers()
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
  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState(true);

  const getUser = () => {
    setLoading(true);
    userApi
      .getUserById(id)
      .then((res) => {
        setData(res)
      })
      .finally(() => setLoading(false))
  }
  return { data, loading, getUser };
}

export const updateUserById = (id: string, user: Partial<User>) => {
  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState(true);

  const updateUser = () => {
    setLoading(true);
    userApi
      .updateUserById(id, user)
      .then((res) => {
        setData(res)
      })
      .finally(() => setLoading(false))
  }

  return { data, loading, updateUser };
}

export const deleteUserById = (id: string) => {
  const [loading, setLoading] = useState(true);

  const deleteUser = () => {
    setLoading(true);
    userApi
      .deleteUserById(id)
      .finally(() => setLoading(false))
  }

  return { loading, deleteUser };
}

