import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { UserDataProvider } from './components/usercontext/usercontext';
import Viewuser from './components/viewuser/viewuser';
import Delete from './components/delete/delete';
import Edit from './components/edit/edit';
import Create from './components/create/create';
function App() {
  return (
    <div className='container mt-5'>
    <UserDataProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/view-user/:id" element={<Viewuser />}/>
            <Route path="/delete-user/:id" element={<Delete />}/>
            <Route path="/edit-user/:id" element={<Edit />}/>
            <Route path="/create-user" element={<Create />}/>
          </Routes>
      </BrowserRouter>
    </UserDataProvider>
    </div>
  );
}

export default App;
