import '../../styles/main.css';
import '../../assets/icomoon/icomoon.css';
import { Link } from 'react-router-dom';

import SliderComponent from './Slider';
import Home from './Home';

export default function Main() {
  return (
    <div className='main'>
      <SliderComponent />
      <div className='main-content'>
        <Home />
      </div>
    </div>
  );
}