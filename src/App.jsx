import { Outlet } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="bg-slate-300 h-screen text-black flex">
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
