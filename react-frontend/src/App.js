import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/listEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponentwn from './components/CreateEmployeeComponentwn';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path='/' exact element = {<ListEmployeeComponent/>}></Route>
                <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
                <Route path='/addemployee' element = {<CreateEmployeeComponentwn/>}></Route>
                <Route path='/update-employee/:id' element = {<UpdateEmployeeComponent/>}></Route>
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
