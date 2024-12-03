import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)<{
  $right?: boolean;
}>`
  margin-right: 10px;
  margin-bottom: 10px;

  &:hover {
    border-color: green !important;
    color: green !important;
  }

  &:focus {
    border-color: green !important;
    color: green !important;
    outline: none;
  }

  ${({ $right }) => $right && "float: right;"}
`;
