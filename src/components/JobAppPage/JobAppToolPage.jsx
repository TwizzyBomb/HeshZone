import React, { useState } from "react";
import "./JobAppToolPage.css";

export default function RequestPage() {
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [daysBack, setDaysBack] = useState("2");
  const [response, setResponse] = useState(null);
  const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBokUGx07SGs4Qy5kcdtT9RDztNGwE0kmw&cx=6069166fa70fd403e&q="Software%20Engineer"%20AND%20San%20Diego%20OR%20remote%20-India%20Java&dateRestrict=d9'
  const api_key = 'AIzaSyBokUGx07SGs4Qy5kcdtT9RDztNGwE0kmw';
  const cx = '6069166fa70fd403e';
  const q = jobTitle + ' AND San Diego OR remote -India Java';

  const lambdaUrl = "https://b33pf4uiz6.execute-api.us-east-1.amazonaws.com/dev"; 


  async function handleSubmit(e) {
    e.preventDefault();
    const url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBokUGx07SGs4Qy5kcdtT9RDztNGwE0kmw&cx=6069166fa70fd403e&q="' + jobTitle + '"%20AND%20San%20Diego%20OR%20remote%20-India%20Java&dateRestrict=d' + daysBack;

    try {
      const res = await fetch(lambdaUrl, {
        method: "GET",
        // headers: { "Content-Type": "application/json"},
        // body: JSON.stringify({ jobTitle, daysBack })
      });

      const data = await res.json();
      setResponse(data);

      // optional download
      // const blob = new Blob([JSON.stringify(data, null, 2)], {
      //   type: "application/json",
      // });
      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = "response.json";
      // link.click();
    } catch (err) {
      setResponse({ error: "Request failed" });
    }
  }

  return (
    <div className="request-page">
      <h1>Send POST Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Field 2:</label>
          <input
            type="text"
            value={daysBack}
            onChange={(e) => setDaysBack(e.target.value)}
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