import styled from "styled-components";

export const CoverContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 18.5rem;

  background-color: ${({ theme }) => theme["base-profile"]};
`

export const CircleBlurDiv = styled.div`
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: #14589C;
  transform: translate(-50%, -50%);
  filter: blur(200px);
`

export const RetangularBlurDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 900px;
  height: 52px;
  background: #14589C;
  transform: translateX(-50%);
  filter: blur(100px);
`