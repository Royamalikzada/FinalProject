import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NoPage from './components/no-page/NoPage';
import Home from './components/home/Home';
import PostDetails from './components/postDetails/PostDetails';
import Pages from './components/pages/Pages';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<PostDetails />} />
            <Route path="/page/:id" element={<Pages />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
