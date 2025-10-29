import './App.css';
import Mynavbar from './Components/Mynavbar';
import Application from './Components/Application';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viewdetails from './Components/Viewdetails';


function App() {
  return (
    <div>
   <BrowserRouter basename="/react_form_task">
      <div>
        {/* Navbar appears on all pages */}
        <Mynavbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/about" element={<Viewdetails />} />
        </Routes>
      </div>
    </BrowserRouter>

   
   </div>
  );
}

export default App;
