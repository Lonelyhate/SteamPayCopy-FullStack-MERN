import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import AdminMenu from './pages/AdminPage/AdminMenu/AdminMenu';
import AdminPage from './pages/AdminPage/AdminPage';
import AuthPage from './pages/authPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { auth } from './redux/actions/user';
import Header from './shared/Header/Header';
import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    HOME_ROTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
} from './utils/constsPath';

function App() {
    const dispatch = useDispatch();
    const { isAuth, currentUser } = useTypedSelector((state) => state.user);
    const role = currentUser?.role;

    useEffect(() => {
        dispatch(auth());
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={HOME_ROTE} element={<HomePage />} />
                {!isAuth ? (
                    <>
                        <Route path={AUTH_ROUTE} element={<AuthPage />} />
                        <Route path={REGISTRATION_ROUTE} element={<AuthPage />} />
                    </>
                ) : (
                    <>
                        <Route
                            path={AUTH_ROUTE}
                            element={<Navigate replace to={PROFILE_ROUTE} />}
                        />
                        <Route
                            path={REGISTRATION_ROUTE}
                            element={<Navigate replace to={PROFILE_ROUTE} />}
                        />
                    </>
                )}
                {isAuth ? (
                    <>
                        <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
                        {role === 'admin' && <Route path={ADMIN_ROUTE} element={<AdminPage />} />}
                    </>
                ) : (
                    <Route path={PROFILE_ROUTE} element={<Navigate replace to={AUTH_ROUTE} />} />
                )}
            </Routes>
        </div>
    );
}

export default App;
