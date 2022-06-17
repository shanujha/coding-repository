import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
const Navbar = <nav style={{
  height: '50px',
  background: '#f3f3f3',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
}}>
  <Link style={{ paddingRight: 10 }} to="/">Home</Link>
  <Link style={{ paddingRight: 10 }} to="/about">About</Link>

</nav>;
const App = () => {
  return <BrowserRouter>
    {Navbar}
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;

const Home = () => {
  return <div>Home</div>
}

const About = () => {
  return <div>About</div>
}