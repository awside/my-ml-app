import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/");
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Error connecting to FastAPI.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">FastAPI + React Demo</h1>

      <button className="btn" onClick={fetchMessage} disabled={loading}>
        {loading ? "Loading..." : "Fetch Message"}
      </button>

      <p className="text-lg text-blue-700">
        <span className="font-semibold">Message:</span> {message}
      </p>
    </div>
  );
}

export default App;
