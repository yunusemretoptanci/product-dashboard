import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login/LoginPage";
import RegisterPage from "./pages/authentication/register/RegisterPage";
import ProductList from "./pages/dashboard/productList/ProductList";
import ProductDetail from "./pages/dashboard/productDetail/ProductDetail";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<AuthenticatedLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product-detail" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
