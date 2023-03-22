import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "./redux/auth/authOperations.jsx";
import authSelectors from "./redux/auth/authSelectors";
import Navigation from "./components/Navigation/Navigation.jsx";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundView from "./views/NotFound/NotFoundView";
import "./index.css";
const CardsView = lazy(() =>
  import("./views/CardsView/CardsView.jsx" /* webpackChunkName: contacts-view*/)
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView.jsx" /* webpackChunkName: login-view*/)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView.jsx" /* webpackChunkName: register-view*/
  )
);

function App(store) {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsLogged);

  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Navigation />
        <Suspense>
          <Routes>
            <Route path="/" element={<Navigate to="login" />}></Route>
            <Route element={<PrivateRoute redirectTo="login" />}>
              <Route path="/data" element={<CardsView />}></Route>
            </Route>
            <Route element={<PublicRoute restricted redirectTo="data" />}>
              <Route path="/login" element={<LoginView />}></Route>
            </Route>
            <Route element={<PublicRoute restricted redirectTo="data" />}>
              <Route path="/register" element={<RegisterView />}></Route>
            </Route>
            <Route path="*" element={<NotFoundView />}></Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
