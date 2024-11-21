import { useCallback } from "react";
import { useState } from "react";

export default function usePost(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makePost = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );
  return { data, error, loading, makePost };
}
