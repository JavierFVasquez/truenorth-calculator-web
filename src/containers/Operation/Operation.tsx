import { TextField } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import { Space } from "../../components/General/Space";
import {
  OperationContainer,
  OperationButtonContainer,
  ResultLabel,
  CustomLoadingButton
} from "./Operation.sty";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  operationAction,
  selectOperation
} from "../../data/redux/reducers/operation.reducer";

const Operation = () => {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");

  const operationSelector = useSelector(selectOperation);
  const dispatch = useDispatch();

  const handleOperatorClick = (operation: string) => {
    if (["SQUARE_ROOT", "RANDOM_STRING"].includes(operation)) {
      setOperand2("");
    }
    if (["RANDOM_STRING"].includes(operation)) {
      setOperand1("");
    }
    dispatch(
      operationAction({
        operand1: parseFloat(operand1),
        operand2: parseFloat(operand2),
        operation
      })
    );
  };

  return (
    <OperationContainer>
      <Space size="XL" />
      <OperationButtonContainer>
        <TextField
          label="Operand #1"
          value={operand1}
          onChange={e => setOperand1(e.target.value)}
        />
        <Space size="L" direction="HORIZONTAL" />
        <TextField
          label="Operand #2"
          value={operand2}
          onChange={e => setOperand2(e.target.value)}
        />
      </OperationButtonContainer>
      <Space size="XL" />
      <OperationButtonContainer>
        <CustomLoadingButton
          variant="contained"
          loading={["ADDITION"].includes(operationSelector.operation ?? "")}
          loadingPosition="end"
          endIcon={<AddIcon />}
          onClick={() => handleOperatorClick("ADDITION")}
        >
          Addition
        </CustomLoadingButton>

        <CustomLoadingButton
          variant="contained"
          loading={["SUBSTRACTION"].includes(operationSelector.operation ?? "")}
          loadingPosition="end"
          endIcon={<HorizontalRuleIcon />}
          onClick={() => handleOperatorClick("SUBSTRACTION")}
        >
          Substraction
        </CustomLoadingButton>

        <CustomLoadingButton
          variant="contained"
          loading={["MULTIPLICATION"].includes(
            operationSelector.operation ?? ""
          )}
          loadingPosition="end"
          endIcon={<ClearIcon />}
          onClick={() => handleOperatorClick("MULTIPLICATION")}
        >
          Multiplication
        </CustomLoadingButton>

        <CustomLoadingButton
          variant="contained"
          loading={["DIVISION"].includes(operationSelector.operation ?? "")}
          loadingPosition="end"
          endIcon={<ShapeLineIcon />}
          onClick={() => handleOperatorClick("DIVISION")}
        >
          Division
        </CustomLoadingButton>

        <CustomLoadingButton
          variant="contained"
          loading={["SQUARE_ROOT"].includes(operationSelector.operation ?? "")}
          loadingPosition="end"
          endIcon={<CropSquareIcon />}
          onClick={() => handleOperatorClick("SQUARE_ROOT")}
        >
          Square root
        </CustomLoadingButton>

        <CustomLoadingButton
          variant="contained"
          loading={["RANDOM_STRING"].includes(
            operationSelector.operation ?? ""
          )}
          loadingPosition="end"
          endIcon={<ShuffleIcon />}
          onClick={() => handleOperatorClick("RANDOM_STRING")}
        >
          Random String
        </CustomLoadingButton>
      </OperationButtonContainer>
      <ResultLabel>
        {operationSelector.result != ""
          ? `Result: ${operationSelector.result}`
          : ""}
      </ResultLabel>
    </OperationContainer>
  );
};

export default Operation;
