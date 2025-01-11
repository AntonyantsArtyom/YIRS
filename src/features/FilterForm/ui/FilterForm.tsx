import { Form } from "antd";
import { useFilterFormStore } from "../model/FilterFormStore";
import {
  StyledButton,
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledInput,
  StyledModal,
} from "./FilterForm.styles";

interface FilterValues {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  roomNumber?: number;
  balance?: string[];
  pediculosis?: string[];
  fluorography?: string[];
}

interface FilterPopupProps {
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

const FilterPopup = ({ onClose, onApplyFilters }: FilterPopupProps) => {
  const [form] = Form.useForm();

  const { filtersOpened } = useFilterFormStore();

  const handleFinish = (values: FilterValues) => {
    onApplyFilters(values);
    onClose();
  };

  return (
    <StyledModal
      title="Фильтры"
      open={filtersOpened}
      onCancel={onClose}
      style={{ maxHeight: "70vh", padding: 0 }}
      bodyStyle={{ padding: "12px" }}
      footer={[
        <StyledButton key="cancel" onClick={onClose}>
          Отмена
        </StyledButton>,
        <StyledButton
          key="apply"
          type="primary"
          onClick={() => form.submit()}
          style={{ background: "green" }}
        >
          Применить
        </StyledButton>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ gap: "8px" }}
      >
        <Form.Item
          label="Имя"
          name="firstName"
          style={{ marginBottom: "12px" }}
        >
          <StyledInput placeholder="Введите имя" />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="lastName"
          style={{ marginBottom: "12px" }}
        >
          <StyledInput placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item
          label="Отчество"
          name="middleName"
          style={{ marginBottom: "12px" }}
        >
          <StyledInput placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label="Комната"
          name="roomNumber"
          style={{ marginBottom: "12px" }}
        >
          <StyledInput
            placeholder="Введите номер комнаты"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <StyledCheckboxContainer>
          <Form.Item
            label="Баланс"
            name="balance"
            style={{ marginBottom: "12px" }}
          >
            <StyledCheckbox>просрочен</StyledCheckbox>
          </Form.Item>
          <Form.Item
            label="Педикулез"
            name="pediculosis"
            style={{ marginBottom: "12px" }}
          >
            <StyledCheckbox>просрочен</StyledCheckbox>
          </Form.Item>
          <Form.Item
            label="Флюорография"
            name="fluorography"
            style={{ marginBottom: "12px" }}
          >
            <StyledCheckbox>просрочена</StyledCheckbox>
          </Form.Item>
        </StyledCheckboxContainer>
      </Form>
    </StyledModal>
  );
};

export default FilterPopup;
