import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";

export default function App() {

  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
