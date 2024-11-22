export type TCertificate = {
  endDate: string;
  startDate: string;
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
  loadStudents: () => Promise<void>;
  setBalance: (id: string, newBalance: number) => Promise<void>;
}