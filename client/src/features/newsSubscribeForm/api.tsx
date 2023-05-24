export async function getEmail(email: string): Promise<string> {
  const res = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status >= 400) {
    const { error } = await res.json();
    throw error;
  }
  console.log(email);

  return res.json();
}
