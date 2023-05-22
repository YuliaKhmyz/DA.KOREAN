import Calligraphy from './types/Calligraphy';

export async function getCalligraphies(): Promise<Calligraphy[]> {
  const result = await fetch('/api/calligraphies');
  return result.json();
}
