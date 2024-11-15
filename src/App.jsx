import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout";
import ShortenLink from "./page/ShortenLink";
import NotFound from "./page/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shorten/:id" element={<ShortenLink />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
