import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
const API_URL = import.meta.env.VITE_API_URL;

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(
                    `${API_URL}/api/user/auth-check`,
                    {
                        withCredentials: true
                    }
                )

                setAuthenticated(true)

            } catch (error) {
                setAuthenticated(false)
            } finally {
                setLoading(false)
            }
        }

        checkAuth()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute