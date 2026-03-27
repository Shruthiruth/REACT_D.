import { createContext, useContext } from "react";
import { useGetMeQuery } from "../features/auth/authApi";

const AuthContext = createContext()
export function AuthProvider({ children }) {
    const { data, isLoading, isError, refetch, error } = useGetMeQuery()
    const user = error?.status === 401 ? null : data?.data

    
    return (
        <AuthContext.Provider value={{ user, data, isLoading, isError, refetch, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);