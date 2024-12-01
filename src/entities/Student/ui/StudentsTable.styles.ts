import { Input, Table } from "antd";
import styled from "styled-components";
import { TStudent } from "../model/types";

export const StyledInput = styled(Input)``;

export const StyledTable = styled(Table<TStudent>).attrs(() => ({
  scroll: { y: 600 },
}))``;
