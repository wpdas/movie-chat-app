import styled from '@emotion/styled';

export const Overlay = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.transparentBlue};
  z-index: 1;
`;

export const Body = styled.div`
  width: calc(100% - 40px);
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 38vh;
  border-radius: 5px;

  @media only screen and (min-width: 500px) {
    width: 460px;
  }
`;
