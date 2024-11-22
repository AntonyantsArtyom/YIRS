export type TUser = {
  id: string;
  accessToken: string;
};

export interface IUserStore {
  user: TUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
}
