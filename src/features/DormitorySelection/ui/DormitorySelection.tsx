import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  StyledList,
  StyledListItem,
  StyledSearch,
  StyledTitle,
} from "./DormitorySelection.styles";

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
    <StyledCard
      title="выберите общежитие"
      style={{
        width: 450,
        height: 700,
        margin: "25px auto",
        overflowY: "auto",
      }}
    >
      <StyledSearch
        placeholder="Введите номер общежития"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={handleSearch}
      />

      {!searchValue ? (
        <>
          <StyledTitle level={5} style={{ marginTop: 20 }}>
            Список общежитий
          </StyledTitle>
          <StyledList
            dataSource={dormList}
            renderItem={(item) => (
              <StyledListItem
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                {item}
              </StyledListItem>
            )}
          />
        </>
      ) : (
        <>
          <StyledTitle level={5} style={{ marginTop: 20 }}>
            Найдено
          </StyledTitle>
          <StyledList
            dataSource={dormList.filter((item) => item.includes(searchValue))}
            renderItem={(item) => (
              <StyledListItem
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                {item}
              </StyledListItem>
            )}
          />
        </>
      )}
    </StyledCard>
  );
};

export default DormitorySelection;
