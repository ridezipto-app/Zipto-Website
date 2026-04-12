import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
