import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ItemListContainer, ItemDetailContainer, Error, Cart, CreateNewProduct } from "./pages";
import { CartProvider } from "../context/CartContext";

function App() {

  return (
    <>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="" element={<ItemListContainer />} />
            <Route path="/create_product" element={<CreateNewProduct />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </CartProvider>
    </>
  );
}

export default App;
