import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import AuthPage from './pages/authPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { auth } from './redux/actions/user';
import { AUTH_ROUTE, PROFILE_ROUTE } from './utils/constsPath';

function App() {
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector((state) => state.user);

    useEffect(() => {
        dispatch(auth());
    }, );

    return (
        <div className="App">
            <Routes>
                <Route path={AUTH_ROUTE} element={<AuthPage />} />
                <Route path={PROFILE_ROUTE} element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;
