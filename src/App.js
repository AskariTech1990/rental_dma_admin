import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Inventory from "./components/Inventory";
import Rentals from "./components/Rentals";
import Payments from "./components/Payments";
import Feedback from "./components/Feedback";
import AddInventory from "./components/AddInventory";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OtpVerification from "./components/OtpVerification";
import PrivateRoute from "./components/PrivateRoute";
import EditItem from "./components/EditItem";
import "./styles/index.css";
import { isAuthenticated } from "./auth";
import UploadGallery from "./components/UploadGallery";
import DeleteGalleryImages from "./components/DeleteGalleryImages";
import RentalRequest from "./components/RentalRequest";
import AdminUser from "./components/AdminUser";
import AdminRoute from "./components/AdminRoute";
import NewQuote from "./components/NewQuote";
import Generate from "./components/Generate";
import ErrorBoundary from "./components/ErrorBoundary";
import SalePage from "./components/SalePage";

function AppContent() {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/signup", "/verify-otp"];

  return (
    <div
      className={`flex min-h-screen ${
        hideSidebarRoutes.includes(location.pathname)
          ? "justify-center items-center bg-cover bg-center"
          : ""
      }`}
      style={
        hideSidebarRoutes.includes(location.pathname)
          ? { backgroundImage: "url('/path/to/your/background-image.jpg')" }
          : {}
      }
    >
      {isAuthenticated() && !hideSidebarRoutes.includes(location.pathname) && (
        <Sidebar />
      )}
      <div
        className={`flex-1 ${
          hideSidebarRoutes.includes(location.pathname)
            ? "max-w-full w-full  bg-opacity-80 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            : ""
        }`}
      >
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            }
          />
          <Route
            path="/rentals"
            element={
              <PrivateRoute>
                <Rentals />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <Payments />
              </PrivateRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <PrivateRoute>
                <Feedback />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-inventory"
            element={
              <PrivateRoute>
                <AddInventory />
              </PrivateRoute>
            }
          />
          <Route
            path="/editItem/:id"
            element={
              <PrivateRoute>
                <EditItem />
              </PrivateRoute>
            }
          />
          <Route
            path="/uploadGallery"
            element={
              <PrivateRoute>
                <UploadGallery />
              </PrivateRoute>
            }
          />
          <Route
            path="/deleteGallery"
            element={
              <PrivateRoute>
                <DeleteGalleryImages />
              </PrivateRoute>
            }
          />
          <Route
            path="/rentalRequest"
            element={
              <PrivateRoute>
                <RentalRequest />
              </PrivateRoute>
            }
          />
          <Route
            path="/newQuote"
            element={
              <PrivateRoute>
                <NewQuote />
              </PrivateRoute>
            }
          />
          <Route
            path="/generate"
            element={
              <PrivateRoute>
                <Generate />
              </PrivateRoute>
            }
          />
           <Route
            path="/sale"
            element={
              <PrivateRoute>
                <SalePage />
              </PrivateRoute>
            }
          />
        
          <Route
            path="/adminUser"
            element={
              <AdminRoute>
                <AdminUser />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
