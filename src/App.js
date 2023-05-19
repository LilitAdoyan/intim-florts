
import './App.css';
import { Route, Routes } from 'react-router-dom';

import RegistrationPage from './components/registration-page';
function App() {
  return (
     <Routes>
    <Route path='' element={<RegistrationPage/>}/>
    <Route path='privacy-policy'/>
    <Route path='terms-of-use'/>
    <Route path='safe-dating'/>
    <Route path='contact-us'/>
  </Routes>
  );
}

export default App;
