export default async function sendCount(count: number) {
  const url = new URL("http://localhost:5000/count");
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(count),
  };

  const response = await fetch(url, options);
  const res = await response.json();

  return res as number;
}
