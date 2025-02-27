import { User } from "./api/user";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: (user: User | null) => void;
} 