import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Alunos from "./pages/Alunos";
import Turmas from "./pages/Turmas";
import Pagamentos from "./pages/Pagamentos";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/alunos"
        element={
          <ProtectedRoute>
            <Alunos />
          </ProtectedRoute>
        }
      />
      <Route
        path="/turmas"
        element={
          <ProtectedRoute>
            <Turmas />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pagamentos/:id"
        element={
          <ProtectedRoute>
            <Pagamentos />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
