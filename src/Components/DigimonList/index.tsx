import React from 'react';
import Link from 'next/link';
import { DigimonListContainer, DigimonItem, DigimonName } from './style';

interface Digimon {
  name: string;
  img: string;
  level: string;
}

interface DigimonListProps {
  digimons: Digimon[];
}

export interface Evolution {
  name: string;
  img: string;
}

const DigimonList: React.FC<DigimonListProps> = ({ digimons }) => (
  <DigimonListContainer>
    {digimons.map((digimon) => (
      <DigimonItem key={digimon.name}>
        <Link href={`/digimon/${digimon.name}`} passHref>
          <DigimonItem>
            <img src={digimon.img} alt={digimon.name} />
            <DigimonName>{digimon.name}</DigimonName>
            <p>{digimon.level}</p>
          </DigimonItem>
        </Link>
      </DigimonItem>
    ))}
  </DigimonListContainer>
);

export default DigimonList;
