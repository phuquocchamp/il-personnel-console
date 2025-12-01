import type { User } from "@/types/user.type";
import axiosInstance from "./axios";

export const userApi = {
  getAllUsers(): Promise<User[]> {
    return axiosInstance.get("/users");
  },

  getUserById(id: string): Promise<User> {
    return axiosInstance.get(`/users/${id}`);
  },

  createUser(data: Partial<User>): Promise<User> {
    return axiosInstance.post("/users", data);
  },

  updateUserById(id: string, data: Partial<User>): Promise<User> {
    return axiosInstance.put(`/users/${id}`, data);
  },

  deleteUserById(id: string): Promise<void> {
    return axiosInstance.delete(`/users/${id}`);
  }
};
