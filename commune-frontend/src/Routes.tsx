import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Message from "./pages/message";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Message />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
