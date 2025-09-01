import React, { useState } from "react";
import "./JobAppToolPage.css";

export default function RequestPage() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [response, setResponse] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://your-api-endpoint.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ field1, field2 }),
      });

      const data = await res.json();
      setResponse(data);

      // optional download
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "response.json";
      link.click();
    } catch (err) {
      setResponse({ error: "Request failed" });
    }
  }

  return (
    <div className="request-page">
      <h1>Send POST Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Field 1:</label>
          <input
            type="text"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
          />
        </div>

        <div>
          <label>Field 2:</label>
          <input
            type="text"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
          />
        </div>

        <button type="submit">Send</button>
      </form>

      {response && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}