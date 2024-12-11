import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DigimonList from '@/Components/DigimonList';
import { Container, Title, LoadingText} from './styles';

const Home = () => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDigimons = async () => {
      try {
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
        console.log('Dados da API:', response.data);
        setDigimons(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Erro ao buscar os Digimons:', error);
        setLoading(false); 
      }
    };

    fetchDigimons();
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingText>Carregando...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Lista de Digimons</Title>
      <DigimonList digimons={digimons} />
    </Container>
  );
};

export default Home;
