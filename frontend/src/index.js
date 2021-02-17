import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavigationBar from './components/NavigationBar/NavigationBar';
import NavigationBar from './components/NavigationBar/NavigationBar';
import InsuranceBar from './components/InsuranceBar/InsuranceBar';
import SearchBar from './components/SearchBar/SearchBar';
import PlusSign from './components/PlusSign';
import ImgCarousel from './components/Carousel';
import VehicleCard from './components/Card';
import TextCard from './components/TextCard';

// Define the React app
const App = () => {
  const CenterText = {
    textAlign: 'center',
  };

  return (
    <section>
      <div>
        <InsuranceBar />
        <NavigationBar />
        <SearchBar />
        <ImgCarousel />
      </div>
      {/* <div>
        <h2 style={CenterText}>FIND A CAR</h2>
        <SearchBar />
      </div> */}
      <div>
        <TextCard />
      </div>
    </section>
  );
};
// Mount the app to the mount point.
const root = document.getElementById('app');
ReactDOM.render(<App />, root);
