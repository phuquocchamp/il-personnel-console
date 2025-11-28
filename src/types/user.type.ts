export interface User {
  _id: string;
  fullname: string;
  age: number;
  location: string;
  job: string;
  avatarUrl: string;
}


export interface CreateUserDTO {
  fullname: string;
  age: number;
  location: string;
  job: string;
  avatarUrl: string;
}