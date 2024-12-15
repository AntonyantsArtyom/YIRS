import { useStudentsStore } from "../../../entities/Student/model/StudentsStore";
import StudentsTable from "../../../entities/Student/ui/StudentsTable";
import { useFilterFormStore } from "../../../features/FilterForm/model/FilterFormStore";
import FilterPopup from "../../../features/FilterForm/ui/FilterForm";
import { StyledButton } from "./StudentView.styles";
import {
  FilterOutlined,
  LogoutOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const StudentsView = () => {
  const { exportStudentsToExcel } = useStudentsStore();
  const { toggleFiltersOpened } = useFilterFormStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleFiltersToggleClick = () => {
    toggleFiltersOpened();
  };

  return (
    <>
      <StyledButton icon={<ArrowLeftOutlined />} onClick={handleBack} />
      <StyledButton
        icon={<FilterOutlined />}
        onClick={handleFiltersToggleClick}
      >
        фильтры
      </StyledButton>
      <StyledButton>менять всех</StyledButton>
      <StyledButton icon={<LogoutOutlined />} onClick={handleLogout} $right>
        выход
      </StyledButton>
      <StyledButton onClick={exportStudentsToExcel}>
        сгененировать Excel
      </StyledButton>
      <FilterPopup
        onClose={handleFiltersToggleClick}
        onApplyFilters={() => {}}
      />
      <StudentsTable />
    </>
  );
};

export default StudentsView;
