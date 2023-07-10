import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Profile,
  AllJobs,
  AddJobs,
  SharedLayout,
  Map,
  DemoApp,
  Learning,
  JobSearchPlatform,
} from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJobs />} />
          <Route path="job-search" element={<JobSearchPlatform />} />
          <Route path="map" element={<Map />} />
          <Route path="demo-app" element={<DemoApp />} />
          <Route path="learning" element={<Learning />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0-LuBnYvaJbYF7ZIVIB9dD00EMPmlutw&libraries=places"></script>
    </BrowserRouter>
  );
}

export default App;
