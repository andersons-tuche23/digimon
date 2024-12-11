import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Container,
  Title,
  DigimonDetails,
  DigimonImage,
  DigimonInfo,
} from "./styles";
import { RelatedDigimons, RelatedDigimonItem } from "./styles";
import { Evolution } from "@/Components/DigimonList";

interface Digimon {
  name: string;
  img: string;
  level: string;
  attacks?: string[];
  evolution?: string;
}

const DigimonDetail = () => {
  const [digimon, setDigimon] = useState<Digimon | null>(null);
  const [loading, setLoading] = useState(true);
  const [evolution, setEvolution] = useState<Evolution[] | null>(null);

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    if (name) {
      const fetchDigimonDetails = async () => {
        try {
          const response = await axios.get(
            `https://digimon-api.vercel.app/api/digimon/name/${name}`
          );
          setDigimon(response.data[0]);
          setLoading(false);
          const evolutionResponse = await axios.get(
            `https://digimon-api.vercel.app/api/digimon/level/${response.data[0].level}`
          );
          setEvolution(evolutionResponse.data);
        } catch (error) {
          console.error("Erro ao carregar os dados do Digimon:", error);
          setLoading(false);
        }
      };

      fetchDigimonDetails();
    }
  }, [name]);

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  if (!digimon) {
    return (
      <Container>
        <Title>Digimon não encontrado</Title>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Detalhes de {digimon.name}</Title>
      <DigimonDetails>
        <DigimonImage>
          <img src={digimon.img} alt={digimon.name} />
        </DigimonImage>
        <DigimonInfo>
          <p>
            <strong>Nível:</strong> {digimon.level}
          </p>
          <p>
            <strong>Ataques:</strong>{" "}
            {digimon.attacks
              ? digimon.attacks.join(", ")
              : "Nenhum ataque disponível"}
          </p>
          <p>
            <strong>Evolução:</strong>{" "}
            {digimon.evolution ? digimon.evolution : "Sem evolução conhecida"}
          </p>
        </DigimonInfo>
      </DigimonDetails>

      <h3>Digimons Relacionados</h3>
      <RelatedDigimons>
        {" "}
        {evolution &&
          evolution.map((evolved) => (
            <RelatedDigimonItem key={evolved.name}>
              {" "}
              <img src={evolved.img} alt={evolved.name} width="100" />
              <p>{evolved.name}</p>
            </RelatedDigimonItem>
          ))}
      </RelatedDigimons>
    </Container>
  );
};

export default DigimonDetail;
