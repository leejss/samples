import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  overflow-x: hidden;
  padding: 16px 0 32px;
`;

export const SwiperWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 16px;
  transition: transform 0.15s linear;
  will-change: transform;

  > * {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export const SwiperItem = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    width: 100%;
  }
`;
