import { Form, Input, InputNumber, Checkbox } from "antd";
import { useFilterFormStore } from "../model/FilterFormStore";
import { StyledButton, StyledModal } from "./FilterForm.styles";

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
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="lastName"
          style={{ marginBottom: "12px" }}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item
          label="Отчество"
          name="middleName"
          style={{ marginBottom: "12px" }}
        >
          <Input placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label="Комната"
          name="roomNumber"
          style={{ marginBottom: "12px" }}
        >
          <InputNumber
            placeholder="Введите номер комнаты"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Баланс"
          name="balance"
          style={{ marginBottom: "12px" }}
        >
          <Checkbox.Group options={["Просрочен", "Не просрочен"]} />
        </Form.Item>
        <Form.Item
          label="Педикулез"
          name="pediculosis"
          style={{ marginBottom: "12px" }}
        >
          <Checkbox.Group options={["Просрочен", "Не просрочен"]} />
        </Form.Item>
        <Form.Item
          label="Флюорография"
          name="fluorography"
          style={{ marginBottom: "12px" }}
        >
          <Checkbox.Group options={["Просрочен", "Не просрочен"]} />
        </Form.Item>
      </Form>
    </StyledModal>
  );
};

export default FilterPopup;
