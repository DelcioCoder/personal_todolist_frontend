import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");

  async function getActivities() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/activities/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch activities");
      }
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      setError("Failed to fetch activities");
    }
  }

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div>
      <h2>Activities Page</h2>
      {error && <p className="text-red-500">{error}</p>}
      {activities.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id} className="mb-4 p-4 border rounded shadow">
              <h3 className="text-xl font-bold">
                Dia {activity.day}: {activity.modality.name}
              </h3>
              <p className="text-gray-700">
                <strong>Finalizado:</strong> {activity.finished ? "Sim" : "Não"}
              </p>
              <p>
                <strong>Descrição:</strong> {activity.modality.description || "Sem descrição"}
              </p>
              <Link
                to={`/notes/${activity.id}`}
                className="text-blue-500 underline"
              >
                Ver Notas
              </Link>
              <small className="text-gray-500">
                Adicionado em: {new Date(activity.date_added).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
