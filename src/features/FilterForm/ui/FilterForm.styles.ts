import { Button, Checkbox, Form, Input, Modal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)``;

export const StyledButton = styled(Button)``;

export const StyledForm = styled(Form)``;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledInput = styled(Input)`
  &:hover,
  &:focus {
    border-color: green !important;
  }
`;

export const StyledCheckbox = styled(Checkbox)``;
