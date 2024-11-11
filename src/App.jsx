import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout";
import ShortenLink from "./page/ShortenLink";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shorten/:id" element={<ShortenLink />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
