import HomeSlider from './HomeSlider';

export default function Home() {

  return (
    <section className='section' id='home'>
      <h1>Somos una empresa joven <span className='is-blue'> con visión tecnológica.</span></h1>
      <article className='home'>
      <HomeSlider/>
      </article>
      
      <div className='buttons is-grouped is-grouped-centered'>
        <button className="contact-us-button">CONTÁCTANOS</button>
      </div>
    </section>
  );
}
