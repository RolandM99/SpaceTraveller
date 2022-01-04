import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/MissionList';
import Rockets from './components/RocketList';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragon" element={<Dragons />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
