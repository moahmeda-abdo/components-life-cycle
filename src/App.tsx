import { useState } from "react";

import "./App.css";
import HomePages from "./pages/HomePages";
import ProductPages from "./pages/ProductPages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>life cycle</div>
      <HomePages />
      <ProductPages/>
    </>
  );
}

export default App;
