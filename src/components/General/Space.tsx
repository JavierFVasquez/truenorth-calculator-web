import styled, { css } from "styled-components";

type spaceSizes = "XS" | "S" | "M" | "L" | "XL";
type spaceDirection = "HORIZONTAL" | "VERTICAL" | "BOTH";

const spaceSizesValues = {
  XS: "5px",
  S: "7px",
  M: "10px",
  L: "15px",
  XL: "20px"
};

export const Space = styled.div<{
  size?: spaceSizes;
  direction?: spaceDirection;
}>`
  ${({ size = "M", direction = "BOTH" }) => {
    const height = ["VERTICAL", "BOTH"].includes(direction)
      ? spaceSizesValues[size]
      : "0";
    const width = ["HORIZONTAL", "BOTH"].includes(direction)
      ? spaceSizesValues[size]
      : "0";
    return css`
      height: ${height};
      width: ${width};
    `;
  }}
`;
