export type TCertificate = {
  endDate: string;
  startDate: string;
  id: string;
};

export type TStudent = {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  roomNumber: number;
  fluorography: TCertificate;
  pediculosis: TCertificate;
  balance: number;
};

export interface IStudentsStore {
  students: TStudent[];
  loading: boolean;
  page: number;
  size: number;
  loadStudents: (page?: number) => Promise<void>;
  setBalance: (id: string, newBalance: number) => Promise<void>;
  setPediculosis: (id: string, date: string) => Promise<void>;
  setFluorography: (id: string, date: string) => Promise<void>;
}
