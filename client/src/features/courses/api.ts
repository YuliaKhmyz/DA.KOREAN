import { Course, CourseId } from './types/Course';

export async function createCourse(
  title: string,
  description: string,
  private_description: string,
  price: number,
): Promise<Course> {
  const res = await fetch('/api/courses', {
    method: 'POST',
    body: JSON.stringify({ title, description, private_description, price }),
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

// export async function updateCalligraphy(
//   calligraphy: Calligraphy,
// ): Promise<void> {
//   await fetch(`/api/calligraphies/${calligraphy.id}`, {
//     method: 'PUT',
//     body: JSON.stringify(calligraphy),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }

// export async function deleteCalligraphy(id: CalligraphyId): Promise<void> {
//   await fetch(`/api/calligraphies/${id}`, {
//     method: 'DELETE',
//   });
// }

export async function getCourse(): Promise<Course[]> {
  const result = await fetch('/api/courses');
  return result.json();
}

// export async function buyCalligraphy(id: CalligraphyId): Promise<void> {
//   const res = await fetch('/api/calligraphies/myCalligraphy', {
//     method: 'POST',
//     body: JSON.stringify({ id }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return;
// }
