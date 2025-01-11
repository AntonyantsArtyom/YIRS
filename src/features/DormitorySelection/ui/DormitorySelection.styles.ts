import { Card, Input, List, Typography } from "antd";
import styled from "styled-components";

export const StyledCard = styled(Card)``;

export const StyledSearch = styled(Input.Search)`
  &&& {
    .ant-input-search-button {
      background: green;
    }
  }
`;

export const StyledTitle = styled(Typography.Title)``;

export const StyledList = styled(List<string>)``;

export const StyledListItem = styled(List.Item)``;
