import { type } from 'os';

export type Course = {
  id: number;
  main_title: string;
  main_description: string;
  start_title: string;
  start_description: string;
  condition_title: string;
  condition_description: string;
  price_title: string;
  price: number;
  type: string;
};

export type CourseId = Course['id'];
