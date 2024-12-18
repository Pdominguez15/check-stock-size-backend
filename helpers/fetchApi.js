const fetchApi = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0",
        connection: "keep-alive",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Error fetching API:", error);
    throw new Error("Failed to fetch data from API");
  }
};

export default fetchApi;
