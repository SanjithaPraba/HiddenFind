import React, { useState } from "react";

function App() {
  // State for user input and results
  const [description, setDescription] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to send description to Flask backend
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Sending request to backend...");  // Debugging log

      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });

      const data = await response.json();

      console.log("Received response:", data);  // Debugging log

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch results");
      }

      setResults(data.results || []); // Ensure results is an array
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headingOverlay}>
        <h1 style={styles.mainHeading}>Spot Match!</h1>
        <h2 style={styles.subHeading}>Your Small Business Search Engine in NYC 🔥🏙️🚀!</h2>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Describe what you're looking for..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p style={styles.errorText}>{error}</p>}

      {/* Search Results */}
      {results.length > 0 && (
        <div style={styles.resultsContainer}>
          <h2 style={styles.resultsHeading}>Results</h2>
          <div style={styles.scrollableResults}>
            {results.map((result, index) => (
              <div key={index} style={styles.resultItem}>
                <h3 style={styles.resultTitle}>{result.name}</h3>
                <p style={styles.resultText}>{result.description}</p>
                <a href={result.web_address} rel="noreferrer" target="_blank" style={styles.resultLink}>
                  Check Out the Website!
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// CSS styles (same as before)
const styles = {
  container: {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://s3-prod.crainsnewyork.com/0316p8-storefronts%203rd%20Ave_Buck%20Ennis.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    margin: 0,
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    color: "#fff",
  },
  headingOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "10px 20px",
    borderRadius: "8px",
    marginBottom: "40px",
  },
  mainHeading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "5px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  },
  subHeading: {
    fontSize: "22px",
    fontWeight: "lighter",
    margin: 0,
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "80%",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  input: {
    width: "93%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s",
  },
  resultsContainer: {
    marginTop: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    maxWidth: "500px",
    width: "100%",
    margin: "20px auto 0",
    color: "#000",
    padding: "20px",
  },
  resultsHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "left",
  },
  scrollableResults: {
    maxHeight: "300px",
    overflowY: "auto",
  },
  resultItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  resultTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0 0 5px",
    color: "#333",
  },
  resultText: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },
  resultRating: {
    fontSize: "14px",
    color: "#007BFF",
    margin: 0,
  },
};


export default App;
