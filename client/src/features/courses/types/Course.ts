import { type } from 'os';

export type Course = {
  id: number;
  title: string;
  description: string;
  private_description: string;
  price: number;
};

export type CourseId = Course['id'];
