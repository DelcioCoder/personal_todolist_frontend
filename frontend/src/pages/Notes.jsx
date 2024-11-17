import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Notes() {
  const { activityId } = useParams(); // ID da atividade recebido da URL
  const [notes, setNotes] = useState([]); // Inicializa como array vazio
  const [error, setError] = useState(""); // Estado para erros
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Função para buscar notas da API
  async function getNotes() {
    setLoading(true); // Ativa o estado de carregamento
    try {
      const token = localStorage.getItem("token"); // Recupera o token do localStorage
      if (!token) throw new Error("Token não encontrado. Faça login novamente.");

      const response = await fetch(
        `http://127.0.0.1:8000/api/activities/${activityId}/notes/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Verifica se a resposta é válida
      if (!response.ok) {
        const errorMsg = `Erro ${response.status}: ${response.statusText}`;
        throw new Error(errorMsg);
      }

      const data = await response.json(); // Converte a resposta para JSON
      setNotes(data); // Atualiza o estado com os dados recebidos
      setError(""); // Reseta o estado de erro
    } catch (error) {
      setError(error.message || "Erro ao buscar notas."); // Define o estado de erro
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  }

  // Busca as notas sempre que o ID da atividade muda
  useEffect(() => {
    if (activityId) {
      getNotes();
    }
  }, [activityId]);

  // Retorno JSX
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Notas da Atividade</h2>

      {/* Exibe mensagem de erro, se houver */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Exibe o estado de carregamento */}
      {loading ? (
        <p className="text-gray-500">Carregando notas...</p>
      ) : notes.length === 0 ? (
        // Mensagem caso não existam notas
        <p className="text-gray-500">Nenhuma nota encontrada para esta atividade.</p>
      ) : (
        // Renderiza a lista de notas
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="p-4 border rounded shadow">
              <p className="text-lg">{note.text}</p>
              <small className="text-gray-500">
                Adicionado em: {new Date(note.date_added).toLocaleString("pt-BR")}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
