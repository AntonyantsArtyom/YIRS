import { Form } from "antd";
import styled from "styled-components";

export type TFormValues = {
  login: string;
  password: string;
};

export const StyledForm = styled(Form<TFormValues>)``;
