import MyCalligraphy from './types/Calligraphy';
import { RootState } from '../../store';

export const selectMyCalligraphies = (state: RootState): MyCalligraphy[] =>
  state.mycalligraphies.calligraphies;
