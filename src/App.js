import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/MissionList';
import Rockets from './components/RocketList';
import MyProfile from './components/MyProfile';
import Dragon from './components/Dragon';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/dragon" element={<Dragon />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
