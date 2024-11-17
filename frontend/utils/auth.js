// Verifica se o usuário está autenticado

export const isAuthenticated = () => {
    const token = localStorage.getItem('access_token');
    return !!token // Retorna true se o token existir, false caso contrário
}


// Obtem o token do armazenamento
export const getToken = () => {
    return localStorage.getItem('access_token');
}


// Remove o token do armazenamento

export const logout = () => {
    localStorage.removeItem('access_token');
}