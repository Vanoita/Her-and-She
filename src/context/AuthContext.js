import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../service/firebaseConfig';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        //When the user changes on logout , relogin
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
            navigate('/signup')
        })
    }, [user, navigate])

    const userData = { user };

    return (
        <AuthContext.Provider value={userData}>
            {!loading && children}
        </AuthContext.Provider>
    )
}