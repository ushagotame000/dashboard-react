import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Data from "@pages/Data";
import AppLayout from "./layout/AppLayout";
const App = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
