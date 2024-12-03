import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../entities/User/model/UserStore";
import { StyledForm, TFormValues } from "./LoginForm.styles";

const LoginForm = () => {
  const { login } = useUserStore();

  const navigate = useNavigate();

  const handleFinish = async (values: TFormValues) => {
    await login(values.login, values.password);
    navigate("/choosedormitory");
  };

  return (
    <Card style={{ width: 450, margin: "150px auto", padding: 20 }}>
      <StyledForm name="login" layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: "введите логин" }]}
        >
          <Input placeholder="введите логин" size="large" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "введите пароль" }]}
        >
          <Input.Password placeholder="введите пароль" size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={false}
            block
            size="large"
            style={{ background: "green" }}
          >
            Войти
          </Button>
        </Form.Item>
      </StyledForm>
    </Card>
  );
};

export default LoginForm;
