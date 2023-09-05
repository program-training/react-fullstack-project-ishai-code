import { Home } from "./components/Home";
import { Trips } from "./components/Trips";
import { UserRegistration } from "./components/UserRegistration";
import { UserLogin } from "./components/UserLogin";
import { Container } from "react-bootstrap";
import { Routes, Route} from 'react-router-dom'
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Trips' element={<Trips />}/>
        <Route path='/UserRegistration' element={<UserRegistration />}/>
        <Route path='/UserLogin' element={<UserLogin />}/>
        </Routes>
      </Container>    
    </>
  );
}

export default App;
