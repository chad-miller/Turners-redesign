import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import InsuranceBar from './components/InsuranceBar/InsuranceBar';
import SearchBar from './components/SearchBar/SearchBar'
import PlusSign from './components/PlusSign';
import ImgCarousel from './components/Carousel'
import VehicleCard from './components/Card'


// Define the React app
const App = () => {
  return (
      <div>
        <InsuranceBar />
        <NavigationBar />
        <ImgCarousel />
        <VehicleCard />
      </div>
  );
      
};
// Mount the app to the mount point.
const root = document.getElementById('app');
ReactDOM.render(<App />, root);
