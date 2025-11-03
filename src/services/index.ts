const BASE_URL = "http://localhost:8000";

async function get<T>(url: string) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function post(url: string, data: any) {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}

export const api = { get, post };
