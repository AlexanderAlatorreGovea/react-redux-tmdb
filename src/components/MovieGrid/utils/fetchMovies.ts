export const fetchData = async (url: string, errorMessage: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${errorMessage}`);
  }

  const json = await response.json();

  return json;
};
