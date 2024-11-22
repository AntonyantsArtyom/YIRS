import type { ColumnsType } from "antd/es/table";
import { useStudentsStore } from "../model/StudentsStore";
import { TStudent } from "../model/types";
import { useEffect, useState } from "react";
import { StyledInput, StyledTable } from "./StudentsTable.styles";

const StudentsTable = () => {
  const { students, loadStudents, loading, setBalance } = useStudentsStore();

  useEffect(() => {
    void loadStudents();
  }, [loadStudents]);

  const [localData, setLocalData] = useState(students);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [newBalance, setNewBalance] = useState<number | null>(null);

  const handleBalanceClick = (id: string, currentBalance: number | null) => {
    setEditingKey(id);
    setNewBalance(currentBalance);
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setNewBalance(Number(value));
    }
  };

  const handleSaveBalance = (id: string) => {
    if (newBalance !== null) {
      setBalance(id, newBalance);

      setLocalData((prevData) =>
        prevData.map((student) =>
          student.id === id ? { ...student, balance: newBalance } : student
        )
      );

      setEditingKey(null);
      setNewBalance(null);
    }
  };

  const columns: ColumnsType<TStudent> = [
    {
      title: "имя",
      dataIndex: "firstName",
      key: "firstName",
      render: (value) => value || "нет значения",
    },
    {
      title: "фамилия",
      dataIndex: "lastName",
      key: "lastName",
      render: (value) => value || "нет значения",
    },
    {
      title: "отчество",
      dataIndex: "middleName",
      key: "middleName",
      render: (value) => value || "нет значения",
    },
    {
      title: "комната",
      dataIndex: "room",
      key: "room",
      render: (value) => value || "нет значения",
    },
    {
      title: "педикулез",
      dataIndex: ["pediculosis", "endDate"],
      key: "pediculosisEndDate",
      render: (_, record) =>
        record.pediculosis?.endDate
          ? new Date(record.pediculosis.endDate).toLocaleDateString()
          : "нет значения",
    },
    {
      title: "флюорография",
      dataIndex: ["fluorography", "endDate"],
      key: "fluorographyEndDate",
      render: (_, record) =>
        record.fluorography?.endDate
          ? new Date(record.fluorography.endDate).toLocaleDateString()
          : "нет значения",
    },
    {
      title: "баланс",
      dataIndex: "balance",
      key: "balance",
      render: (value, record) =>
        editingKey === record.id ? (
          <StyledInput
            value={newBalance ?? ""}
            onChange={handleBalanceChange}
            onBlur={() => handleSaveBalance(record.id)}
            autoFocus
          />
        ) : (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleBalanceClick(record.id, value)}
          >
            {value || "нет значения"}
          </div>
        ),
    },
  ];

  return (
    <StyledTable
      columns={columns}
      dataSource={localData}
      rowKey="id"
      pagination={false}
      loading={loading}
      bordered
      scroll={{ y: "calc(100vh - 150px)" }}
    />
  );
};

export default StudentsTable;
