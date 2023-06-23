import styled from "styled-components";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: 40px 60px;
  h1 {
    margin: 0 10px;
  }
  h3 {
    margin: 0 10px 30px 10px;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 40px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
