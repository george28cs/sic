import Slider from "react-slick";
import '../../styles/home.css';

export default function HomeSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 5000,
        dotsClass: 'slick-dots'
    };


    return (
        <div className='home-slider-wrapper'>
            <Slider {...settings}>
                <div>
                    <h1 className='slider-item-h1'>Suministros</h1>
                    <h2 className='slider-subtitle'>Equipos y materiales asociados a proyectos y servicios</h2>
                </div>
                <div>
                    <h1 className='slider-item-h1'>Servicios</h1>
                    <h2 className='slider-subtitle'> Ingeniería, control, instrumentos, eléctricos, mecánicos y mantenimiento.
                    </h2>
                </div>
                <div>
                    <h1 className='slider-item-h1'>Proyectos</h1>
                    <h2 className='slider-subtitle'> Desde el diseño y selección de la solución hasta la implementación llave en mano.
                    </h2>
                </div>
            
            </Slider>
        </div>
    );


}
