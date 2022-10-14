import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ItemListContainer, ItemDetailContainer, Error, Cart, CreateNewProduct, SignIn, MyShopping } from "./pages";
import { CartProvider } from "@src/contexts/CartContext";

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
            <Route path="/myShopping/:id" element={<MyShopping />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignIn register={true} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </CartProvider>
    </>
  );
}

export default App;
