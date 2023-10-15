import { Route, Routes, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import React, { Suspense, useEffect } from "react";
import "./index.css";
import JoinTrainer from "./components/joinTrainer";
import JoinStudent from "./components/joinStudent";
import PageSwitcher from "./components/PageSwitcher";
import ChatComponent from "./components/chat";
function App() {
  const Login = React.lazy(() => import("./components/login"));
  const Forgetpassword = React.lazy(() =>
    import("./components/forgetpassword")
  );
  const User = React.lazy(() => import("./components/user"));
  return (
    <>
      <Suspense
        fallback={
          <ClipLoader
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            color="#ff5f5f"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Routes>
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<PageSwitcher />} />
          <Route path="/joinTrainer" element={<JoinTrainer />} />
          <Route path="/joinStudent" element={<JoinStudent />} />
          <Route path="/ForgetPassword" element={<Forgetpassword />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
