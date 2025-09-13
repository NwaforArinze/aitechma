import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Layout from "./Component/shared/Layout";
import Home from "./pages/Home";
import TalentProfile from "./pages/TalentProfile";
import Requests from "./pages/Requests";
import Interviews from "./pages/Interviews";
import Bills from "./pages/Bills";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import TalentTable from "./Component/TalentTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="talents/:id" element={<TalentProfile />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/interviews" element={<Interviews />}>
            <Route index element={<Navigate to="talent" replace />} />
            <Route path="talent" element={<TalentTable />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
