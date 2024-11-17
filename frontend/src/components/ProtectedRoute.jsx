import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../utils/auth'

export default function ProtectedRoute({ children }) {
    if(!isAuthenticated()){
        // Redireciona para o login se não estiver autenticado
        return <Navigate to="/login" replace/>
    }


    // Retorna os componentes filhos se estiver autenticado
    return children;
}


