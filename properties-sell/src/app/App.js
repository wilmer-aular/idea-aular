import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ItemListContainer, ItemDetailContainer, Error, Cart } from "./pages";


function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
