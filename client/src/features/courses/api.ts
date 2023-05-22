import { Course, CourseId } from './types/Course';

export async function createCourse(
  main_title: string,
  main_description: string,
  start_title: string,
  start_description: string,
  condition_title: string,
  condition_description: string,
  price_title: string,
  price: number,
): Promise<Course> {
  const res = await fetch('/api/courses', {
    method: 'POST',
    body: JSON.stringify({
      main_title,
      main_description,
      start_title,
      start_description,
      condition_title,
      condition_description,
      price_title,
      price,
    }),
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
