import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff; 
  color: #333;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff6347; 
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Comic Sans MS', sans-serif;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: #888;
  font-style: italic;
  text-align: center;
  margin-top: 50px;
`;

export const DigimonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

export const DigimonItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }
`;
