import { useState } from "react";

import "./App.css";
import HomePages from "./pages/HomePages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>life cycle</div>
      <HomePages />
    </>
  );
}

export default App;
