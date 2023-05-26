import { type } from 'os';

export type Calligraphy = {
  id: number;
  link: string;
  title: string;
  koreantitle: string;
  price: string;
  type: string;
};

export type CalligraphyId = Calligraphy['id'];
