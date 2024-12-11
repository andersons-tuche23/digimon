import styled from 'styled-components';

export const DigimonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const DigimonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  img {
    max-width: 100px;
    height: auto;
  }
  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;

export const DigimonName = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;
