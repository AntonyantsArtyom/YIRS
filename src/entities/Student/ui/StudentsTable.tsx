import type { ColumnsType } from "antd/es/table";
import { useStudentsStore } from "../model/StudentsStore";
import { TStudent } from "../model/types";
import { useEffect, useState } from "react";
import { StyledInput, StyledTable } from "./StudentsTable.styles";

const StudentsTable = () => {
  const {
    students,
    loadStudents,
    loading,
    setBalance,
    setPediculosis,
    setFluorography,
    page,
    size,
  } = useStudentsStore();

  useEffect(() => {
    void loadStudents();
  }, [loadStudents]);

  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [newBalance, setNewBalance] = useState<string | null>(null);
  const [pediculosisEditingKey, setPediculosisEditingKey] = useState<
    string | null
  >(null);
  const [newPediculosisEndDate, setNewPediculosisEndDate] = useState<
    string | null
  >(null);
  const [fluorographyEditingKey, setFluorographyEditingKey] = useState<
    string | null
  >(null);
  const [newFluorographyEndDate, setNewFluorographyEndDate] = useState<
    string | null
  >(null);

  const handleBalanceClick = (id: string, currentBalance: number | null) => {
    setEditingKey(id);
    setNewBalance("" + currentBalance);
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewBalance(value);
  };

  const handleSaveBalance = (id: string) => {
    if (newBalance && !isNaN(+newBalance)) {
      setBalance(id, +newBalance);
      setEditingKey(null);
      setNewBalance(null);
    }
  };

  const handlePediculosisClick = (id: string, endDate: string | null) => {
    setPediculosisEditingKey(id);
    setNewPediculosisEndDate(endDate || "");
  };

  const handlePediculosisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPediculosisEndDate(value);
  };

  const handleSavePediculosis = (id: string) => {
    if (newPediculosisEndDate) {
      setPediculosis(id, newPediculosisEndDate);
      setPediculosisEditingKey(null);
      setNewPediculosisEndDate(null);
    }
  };

  const handleFluorographyClick = (id: string, endDate: string | null) => {
    setFluorographyEditingKey(id);
    setNewFluorographyEndDate(endDate || "");
  };

  const handleFluorographyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewFluorographyEndDate(value);
  };

  const handleSaveFluorography = (id: string) => {
    if (newFluorographyEndDate) {
      setFluorography(id, newFluorographyEndDate);
      setFluorographyEditingKey(null);
      setNewFluorographyEndDate(null);
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
      title: "педикулез (до)",
      dataIndex: ["pediculosis", "endDate"],
      key: "pediculosisEndDate",
      render: (_, record) =>
        pediculosisEditingKey === record.id ? (
          <StyledInput
            value={newPediculosisEndDate ?? ""}
            onChange={handlePediculosisChange}
            onBlur={() => handleSavePediculosis(record.id)}
            autoFocus
          />
        ) : (
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handlePediculosisClick(record.id, record.pediculosis?.endDate)
            }
          >
            {record.pediculosis?.endDate
              ? new Date(record.pediculosis.endDate).toLocaleDateString()
              : "нет значения"}
          </div>
        ),
    },
    {
      title: "флюорография (до)",
      dataIndex: ["fluorography", "endDate"],
      key: "fluorographyEndDate",
      render: (_, record) =>
        fluorographyEditingKey === record.id ? (
          <StyledInput
            value={newFluorographyEndDate ?? ""}
            onChange={handleFluorographyChange}
            onBlur={() => handleSaveFluorography(record.id)}
            autoFocus
          />
        ) : (
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleFluorographyClick(record.id, record.fluorography?.endDate)
            }
          >
            {record.fluorography?.endDate
              ? new Date(record.fluorography.endDate).toLocaleDateString()
              : "нет значения"}
          </div>
        ),
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
      dataSource={students}
      rowKey="id"
      pagination={{
        current: page,
        pageSize: size,
        total: 1000,
        showSizeChanger: false,
        onChange: (page) => {
          loadStudents(page);
        },
        position: ["bottomCenter"],
      }}
      loading={loading}
      bordered
    />
  );
};

export default StudentsTable;
