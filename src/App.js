import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create" element={<Create />} />
              <Route path="/posts/:id" element={<PostDetails />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/update-profile" element={<Update />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;