import Calligraphy from './types/Calligraphy';

export async function getMyCalligraphies(): Promise<Calligraphy[]> {
  const result = await fetch('/api/calligraphies/mypage');
  return result.json();
}
