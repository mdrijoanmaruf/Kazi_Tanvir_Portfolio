export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDocument extends User {
  _id: string;
}
