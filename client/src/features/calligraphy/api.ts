import { CalligraphyId, Calligraphy } from './types/Calligraphy';

export async function createCalligraphy(
  title: string,
  link: string,
  koreantitle: string
): Promise<Calligraphy> {
  const res = await fetch('/api/calligraphies', {
    method: 'POST',
    body: JSON.stringify({ title, link, koreantitle }),
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

export async function updateCalligraphy(
  calligraphy: Calligraphy
): Promise<void> {
  await fetch(`/api/calligraphies/${calligraphy.id}`, {
    method: 'PUT',
    body: JSON.stringify(calligraphy),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function deleteCalligraphy(id: CalligraphyId): Promise<void> {
  await fetch(`/api/calligraphies/${id}`, {
    method: 'DELETE',
  });
}

export async function getCalligraphy(): Promise<Calligraphy[]> {
  const result = await fetch('/api/calligraphies');
  return result.json();
}

export async function buyCalligraphy(id: CalligraphyId): Promise<void> {
  const res = await fetch('/api/calligraphies/myCalligraphy', {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return;
}
