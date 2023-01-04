import React, { useState, useEffect } from "react";

export function ZipCode() {
  const [data, setData] = useState(null);
  const [zipcode, setZipCode] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
      response = await response.json();
      setData(response);
    }

    if (zipcode.length > 5) {
      fetchMyAPI();
    }
  }, [zipcode]);

  return (
    <>
      {data && <article>{JSON.stringify(data)}</article>}

      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Search zipcode"
      />
    </>
  );
}
