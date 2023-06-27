import electricalImg from '../../assets/electrical.jpg';
import mechanicalImg from '../../assets/electromec.jpg';
import electrical from '../../assets/electrical.jpeg';
import instruments from '../../assets/instruments.jpg';
import controlVideo from '../../assets/Control.mp4';
import instrumentsVideo from '../../assets/aboutVideo1.mp4';

/*
Capacidades: capacidades divirlo en 2 rubros: en proyectos y capital humano.
*/

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/capabilities.css';
import anime from 'animejs';

export default function Capabilities() {
  const capabilitiesData = [
    { title: 'Sistemas de control', subtitle: 'Ofrecemos soporte desde el diseño, hasta la instalación y puesta en marcha.', video: controlVideo, type: 'video' },
    { title: 'Servicios electromecánicos', subtitle: 'Diseño, adecuaciones, instalación y mantenimiento.', image: mechanicalImg },
    { title: 'Servicios eléctricos', subtitle: 'Diseño, instalación y mantenimiento.', image: electrical },
    { title: 'Instrumentación', subtitle: 'Dimensionamiento, suministro, instalación, calibración y puesta en operación.', video: instrumentsVideo, type: 'video' },
  ];

  const renderCardImage = (capability) => {
    if (capability.type === 'video') {
      return (
        <div
          className='card-image'
        >
          <video className='card-video' autoPlay muted loop>
            <source src={capability.video} type='video/mp4' />
          </video>
          <div className='video-overlay fade-in'>
            <h2 className='image-text'>{capability.title}</h2>
            <p className='image-subtitle'>{capability.subtitle}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className='card-image'
          style={{ backgroundImage: `url(${capability.image})` }}
        >
          <div className='image-overlay fade-in'>
            <h2 className='image-text'>{capability.title}</h2>
            <p className='image-subtitle'>{capability.subtitle}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className='section' id='capabilities'>
      <h1>Capacidades</h1>
      <div className='capabilities-container'>
        {capabilitiesData.map((capability, index) => (
          <div className='card' key={index}>
            {renderCardImage(capability)}
          </div>
        ))}
      </div>
    </section>
  );
}