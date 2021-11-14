export const fetchData = async (url: string, errorMessage: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`${errorMessage}`);
  }

  const json = await response.json();

  return json;
};
