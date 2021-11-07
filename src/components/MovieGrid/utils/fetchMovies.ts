export const fetchData = async (url: string, errorMessage: string) => {
  console.log("fetch URL: ", url)
  const response = await fetch(url);
  console.log("fetchData response: ",response)
  
  if (!response.ok) {
    throw new Error(`${errorMessage}`);
  }

  const json = await response.json();

  return json;
};
