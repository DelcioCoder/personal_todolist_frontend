import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth'; // Certifique-se de que o caminho para o arquivo auth.js está correto

export default function ProtectedRoute({ children }) {
    // Verifica se o usuário está autenticado
    if (!isAuthenticated()) {
        // Redireciona para a página de login caso o usuário não esteja autenticado
        return <Navigate to="/login" replace />;
    }

    // Renderiza os componentes filhos (rota protegida) se o usuário estiver autenticado
    return children;
}
