import type { User } from "@/types/user.type";
import axiosInstance from "./axios";

export const userApi = {
  getAll(): Promise<User[]> {
    return axiosInstance.get("/users");
  },

  getById(id: string): Promise<User> {
    return axiosInstance.get(`/users/${id}`);
  },

  create(data: Partial<User>): Promise<User> {
    return axiosInstance.post("/users", data);
  },

  update(id: string, data: Partial<User>): Promise<User> {
    return axiosInstance.put(`/users/${id}`, data);
  },

  delete(id: string): Promise<void> {
    return axiosInstance.delete(`/users/${id}`);
  }
};
