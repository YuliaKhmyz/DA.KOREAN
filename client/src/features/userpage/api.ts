import Calligraphy from './types/Calligraphy';

export async function getMyCalligraphies(): Promise<Calligraphy[]> {
  const result = await fetch('/api/calligraphies/mypage');
  return result.json();
}

export async function loadPhoto(file: string): Promise<string> {
  const res = await fetch('api/photo', {
    method: 'PUT',
    body: file,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
}
