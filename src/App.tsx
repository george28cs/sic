import './styles/App.css';
import 'bulma/css/bulma.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import SliderComponent from './components/main/BackgroundSlider';
import useActiveSection from './utils/customHooks/useActiveSection';
import AppContext from './context/AppContext';


function App() {
  const initialState = useActiveSection()
  return (
    <AppContext.Provider value={initialState}>

    <>
      <SliderComponent />
      <Header />
      <Main />
      <Footer />
    </>
    </AppContext.Provider>
  );
}

export default App;
