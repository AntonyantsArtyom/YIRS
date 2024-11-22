import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, List, Typography, Card } from "antd";

const { Search } = Input;

const DormitorySelection = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dormList = ["№14", "№15", "№16"];

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleClick = () => {
    navigate("/students");
  };

  return (
    <Card
      title="выберите общежитие"
      style={{
        width: 450,
        height: 700,
        margin: "25px auto",
        overflowY: "auto",
      }}
    >
      <Search
        placeholder="Введите номер общежития"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={handleSearch}
      />

      {!searchValue ? (
        <>
          <Typography.Title level={5} style={{ marginTop: 20 }}>
            Список общежитий
          </Typography.Title>
          <List
            dataSource={dormList}
            renderItem={(item) => (
              <List.Item onClick={handleClick} style={{ cursor: "pointer" }}>
                {item}
              </List.Item>
            )}
          />
        </>
      ) : (
        <>
          <Typography.Title level={5} style={{ marginTop: 20 }}>
            Найдено
          </Typography.Title>
          <List
            dataSource={dormList.filter((item) => item.includes(searchValue))}
            renderItem={(item) => (
              <List.Item onClick={handleClick} style={{ cursor: "pointer" }}>
                {item}
              </List.Item>
            )}
          />
        </>
      )}
    </Card>
  );
};

export default DormitorySelection;
