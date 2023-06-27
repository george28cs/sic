import React, { useEffect, useRef } from 'react';
import '../../styles/experience.css';
import anime from 'animejs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//#region images imports
import sales1 from '../../assets/experience/sales_exp.jpg';
import sales2 from '../../assets/experience/sale_exp2.jpg';
import sales3 from '../../assets/experience/sales_exp_3.jpg';
import sales4 from '../../assets/experience/sales_exp4.jpg';

import yexca1 from '../../assets/experience/yexca_exp.jpg';
import yexca2 from '../../assets/experience/yexca_exp2.jpg';
import yexca3 from '../../assets/experience/yexca_exp3.png';
import yexca4 from '../../assets/experience/yexca_exp4.jpg';

import bellota1 from '../../assets/experience/bellota_exp.png';
import bellota2 from '../../assets/experience/bellota_exp2.png';
import bellota3 from '../../assets/experience/bellota_exp3.png';

import caderayta1 from '../../assets/experience/cadereyta.png';
import caderayta2 from '../../assets/experience/cadereyta2.png';
import caderayta3 from '../../assets/experience/cadereyta3.jpg';

import engie1 from '../../assets/experience/engie.jpg';
import engie2 from '../../assets/experience/engie2.jpg';
import engie3 from '../../assets/experience/engie3.jpg';
import engie4 from '../../assets/experience/engie4.jpg';

import imp1 from '../../assets/experience/imp1.jpg';
import imp2 from '../../assets/experience/imp2.jpg';
import imp3 from '../../assets/experience/imp3.jpg';
import imp4 from '../../assets/experience/imp4.jpg';

import nvoPemex1 from '../../assets/experience/nvoPemex.jpg';
import nvoPemex2 from '../../assets/experience/nvoPemex2.jpg';
import nvoPemex3 from '../../assets/experience/nvoPemex3.jpg';
import nvoPemex4 from '../../assets/experience/nvoPemex4.jpg';

//#endregion

export default function Experience() {
  const projectsData = [
    {
      title: 'Industria Química del Istmo',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Canalización de potencia y control, cableado y conexionado en evaporación.',
        'Habilitación de alumbrado, cableado de control, potencia en PTA.',
        'Suministro e instalación de soportes, cableado y conexionado de circuitos eléctricos de fuerza y control de la torre de enfriamiento.',
        'Cableado y conexionado Calderas.',
        'Canalización de cableado fuerza y control. ',
        'Instalación de sistema de compresión de aire. ',
        'Canalización y cableado de instrumentos.',
      ],
      images: [
        sales1,
        sales2,
        sales3,
        sales4
      ],
    },
    {
      title: 'Hilos de Yecapixtla',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Instalación e interconexión de compresor de aire centrifugo, suministro de secadora de aire y torre de enfriamiento.',
        'Ensamble en gabinete, cableado e interconexión de arrancador suave para el compresor de aire centrifugo.',
        'Integración de Bypass a filtro coalescente a la descarga del compresor centrífugo.',
        'Instalación de insertos para instalación de transmisores de presión y temperatura.',
      ],
      images: [yexca1, yexca2, yexca3, yexca4],
    },
    {
      title: 'Activo Integral Bellota Jujo',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Suministro, instalación, interconexión, configuración y puesta en marcha de compresor de aire tipo tornillo libre de aceite de 150HP en la estación de compresión Bellota.',
        'Suministro, instalación, interconexión y puesta en marcha de 2 compresores de tipo pistón en la batería de separación puerto ceiba.',
      ],
      images: [bellota1, bellota2, bellota3],
    },
    {
      title: 'Refinería Cadereyta',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Suministro, instalación, configuración, interconexión, pruebas y puesta en marcha de sistema de control para filtros de arena y carbón en la planta de servicios auxiliares.',
        'Refaccionamiento, mantenimiento y rehabilitación a sistema de control y red de campo ControlNet con el fin de brindar confiabilidad operativa al sistema UDA-400 en la planta de servicios auxiliares.',
      ],
      images: [caderayta1, caderayta2, caderayta3],
    },
    {
      title: 'CPG Nuevo Pemex',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Refaccionamiento, rehabilitación y mantenimiento a compresores de aire y sistemas de eliminación automáticos de humedad de la red de aire de planta e instrumentos.',
        'Actualización de sistema de control e instrumentación asociada a las secadoras de aire USAI del CPG Nuevo Pemex.',
        'Mantenimiento correctivo a pre-filtros y post-filtros del sistema de secado de aire.',
      'Refaccionamiento e instalación de fuentes de alimentación de CD para los turbogeneradores'
      ],
      images: [nvoPemex1, nvoPemex2, nvoPemex3, nvoPemex4],
    },
    {
      title: 'Instituto Mexicano del Petróleo',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Mantenimiento preventivo, correctivo y calibración de los equipos de medición y auxiliares para la caracterización de fluidos.',
        'Servicio de acoplamiento de un separador vertical de hidrocarburos al Loop de alta presión L1.',
        'Suministro de aceite lubricante.',
      ],
      images: [imp1, imp2, imp3, imp4],
    },
    {
      title: 'Engie / RFT',
      subtitle1: 'Alcances:',
      subtitle2: [
        'Servicio de automatización al sistema de control en la estación de compresión CS1-Macuspana.',
        ],
      images: [engie1, engie2, engie3, engie4],
    },
  ];

  const animateCards = useRef(null);

  useEffect(() => {
    animateCards.current = anime({
      targets: '.card',
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(100),
      autoplay: false,
    });
  }, []);

  useEffect(() => {
    animateCards.current.play();
  }, []);

  return (
    <section className='section' id='experience'>
      <h1>Nuestra experiencia</h1>
      <div className='experience-container'>
        {projectsData.map((project, index) => (
          <div className='card' key={index}>
            <div className='card-image'>
              {project.images.length > 1 ? (
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                  {project.images.map((image, idx) => (
                    <img key={idx} src={image} alt={`Slider ${idx + 1}`} />
                  ))}
                </Carousel>
              ) : (
                <img src={project.images[0]} alt='Image' />
              )}
            </div>
            <div className='card-content'>
              <h2>{project.title}</h2>
              <h3>{project.subtitle1}</h3>
              <ul>
                {project.subtitle2.map((subtitle, idx) => (
                  <li key={idx}>{subtitle}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
