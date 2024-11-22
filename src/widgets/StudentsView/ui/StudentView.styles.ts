import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)<{
  $right?: boolean;
}>`
  margin-right: 10px;
  margin-bottom: 10px;
  ${({ $right }) => $right && "float: right;"}
`;
