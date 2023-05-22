import { Calligraphy } from './types/Calligraphy';
import { RootState } from '../../store';

export const selectCalligraphies = (state: RootState): Calligraphy[] =>
  state.calligraphies.calligraphies;
