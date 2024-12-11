import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
  background: #ffffff; 
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); 
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); 
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const DigimonDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7; 
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const DigimonImage = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const DigimonInfo = styled.div`
  flex: 1;
  p {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
    font-weight: 500;
  }

  strong {
    font-weight: bold;
    color: #007bff; 
  }
`;

export const RelatedDigimons = styled.div`
  margin-top: 50px;
  h3 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 40px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 0 20px;
`;

export const RelatedDigimonItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  max-width: 250px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 160px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }

  p {
    font-size: 1.15rem;
    color: #444;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 10px;
    text-align: center;
    line-height: 1.5;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    background-color: #e0f7fa;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

