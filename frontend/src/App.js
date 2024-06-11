import Result from './components/Result';
import Upload from './components/Upload';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Text from './components/Upload_for_text';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/result" element={<Result/>} />
          <Route exact path="/upload" element={<Upload/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/text" element={<Text/>} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;


