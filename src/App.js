import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hone from "./components/Home/Hone";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blog from "./components/Blogs/Blog";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Hone></Hone>}></Route>
        <Route path="/hone" element={<Hone></Hone>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
