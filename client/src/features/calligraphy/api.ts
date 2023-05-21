import Callirgaphy, { CalligraphyId } from './types/Calligraphy';

export async function createCalligraphy(
  title: string,
  link: string,
): Promise<Callirgaphy> {
  const res = await fetch('/api/callirgaphies', {
    method: 'POST',
    body: JSON.stringify({ title, link }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }

  return res.json();
}

export async function deleteCalligraphy(id: CalligraphyId): Promise<void> {
  await fetch(`/api/callirgaphies/${id}`, {
    method: 'DELETE',
  });
}

export async function getCalligraphy(): Promise<Callirgaphy[]> {
  const result = await fetch('/api/calligraphies');
  return result.json();
}
