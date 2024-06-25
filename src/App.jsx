import './App.css';
// import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';



function App() {
  return (
    <div>
      

      <HeaderComponent />
      <BodyComponent />
      {/* adding footer component */}
      <GallaryFooter/> 
      {/* <HeaderComponent /> */}
    </div>
  )
}

export default App;
