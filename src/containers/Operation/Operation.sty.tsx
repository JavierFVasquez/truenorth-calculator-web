import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";

export const OperationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OperationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
`;
export const ResultLabel = styled.h3`
  height: 20px;
`;
export const CustomLoadingButton = styled(LoadingButton)`
  margin: 6px !important;
`;
