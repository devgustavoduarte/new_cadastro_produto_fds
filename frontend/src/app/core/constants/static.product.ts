import { Product } from '../models/products';

const date: Date = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const ProductData: Product[] = [
  new Product(
    1,
    'Samsung S20',
    1800,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'Patos - PB'
  ),
  new Product(
    2,
    'iPhone 15 Plus',
    12000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'São Paulo - SP'
  ),
  new Product(
    3,
    'Playstation 5',
    3800,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'Rio de Janeiro - RJ'
  ),
  new Product(
    4,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    5,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    6,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    7,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    8,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    9,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    10,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
  new Product(
    11,
    'PC Gamer',
    15000,
    'Eletronic',
    date.toLocaleDateString('pt-BR'),
    date.toLocaleDateString('pt-BR'),
    'João Pessoa - PB'
  ),
];
