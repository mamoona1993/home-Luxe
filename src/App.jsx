// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NavigationBar from "./ui/NavigationBar";
import Footer from "./ui/Footer";
import Privacy from "./pages/Privacy";
import RelatedProducts from "./ui/RelatedProducts";
import Gallery from "./ui/Gallery";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:product_id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/policy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
