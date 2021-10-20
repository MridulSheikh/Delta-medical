
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import PageNotfound from './Pages/pageNotFound/PageNotfound';
import Footer from './component/footer/Footer';
import Singup from './Pages/singup/SingUp';
import Service from './Pages/Services/Service';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import { useEffect, useState } from 'react';
import PrivateRout from './component/PrivetRoute/PrivetRoute';
function App() {
  return (
    <>
 <AuthProvider>
 <Router>
 <Header/>
 <Switch>
 <Route exact path="/">
 <Home></Home>
 </Route>
 <Route path="/home">
 <Home></Home>
 </Route>
 <Route path="/login"> 
 <Login></Login>
 </Route>
 <Route path="/singup">
 <Singup></Singup>
 </Route>
 <PrivateRout path="/service">
 <Service></Service>
 </PrivateRout>
 <Route path="/about">
 <About></About>
 </Route>
 <Route>
 <PageNotfound></PageNotfound>
 </Route>
 </Switch>
 <Footer></Footer>
 </Router>
 </AuthProvider>
    </>
  );
}

export default App;
