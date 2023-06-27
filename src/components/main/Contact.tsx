import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import '../../styles/contact.css';
import Joi from "joi";

export default function Contact() {
  const formErrors: FormErrors = {};
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(formErrors);
  const [token, setToken] = useState('');
  const [recaptchaRendered, setRecaptchaRendered] = useState(false);

  const _window = window as any;

  const schema = useMemo(
    () =>
      Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        message: Joi.string().min(10).max(1000).required(),
        token: Joi.string().required(),
      }),
    []
  );

  const validate = useCallback(() => {
    const { error } = schema.validate({ name, email, message, token }, { abortEarly: false });
    if (!error) return null;

    const newErrors: FormErrors = {};
    error.details.forEach((detail) => {
      let message = '';
      if (detail.message.includes('name')) message = 'Por favor ingresa un nombre válido';
      if (detail.message.includes('email')) message = 'Por favor ingresa un email válido';
      if (detail.message.includes('message')) message = 'Por favor ingresa un mensaje válido';
      if (detail.message.includes('token')) message = 'La validación del captcha es requerida';

      newErrors[detail.path[0]] = message;
    });
    setErrors(newErrors);
    return newErrors;
  }, [email, message, name, schema, token]);

  const reCaptchaRef = useRef(null);

  useEffect(() => {
    if (!recaptchaRendered) {
      _window.grecaptcha.ready(() => {
        try {
          _window.grecaptcha.render(reCaptchaRef.current, {
            sitekey: '6LciTOUkAAAAAIB960VJXWhMSRvFtODS5StGKR9d',
            callback: onLoaded,
            theme: 'dark',
            size: 'compact',
            'expired-callback': function () {
              setToken('');
            },
          });
        } catch (error) {
          console.log(error.message);
        }
      });
      setRecaptchaRendered(true);
    }
  }, [recaptchaRendered]);


  const onLoaded = async (token: string) => {
    setToken(token);
    setErrors({});
  };

  const clear = () => {
    setEmail('');
    setName('');
    setMessage('');
    setToken('');
    setErrors({});
    _window.grecaptcha.reset();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    const { message, email, name, token } = errors || {};
    if (!message && !email && !name && !token) clear();
  };


  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Código para inicializar el mapa y manipularlo
    const map = new _window.google.maps.Map(mapRef.current, {
      center: { lat: 18.14887, lng: -94.4414113 }, // Ejemplo de ubicación en San Francisco
      zoom: 15,
      zoomControl: true, // Habilitar control de zoom
    });

    // Puedes agregar marcadores, polígonos, etc. aquí
    // Agregar marcador
    const marker = new _window.google.maps.Marker({
      position: { lat: 18.14887, lng: -94.4414113 },
      map: map,
      title: 'SIS&C',
      label: {
        text: 'SIS&C', // Contenido del label
        color: 'black', // Color del texto del label
        fontSize: '14px', // Tamaño de fuente del label
        fontWeight: 'bold', // Peso de fuente del label
      },
    });

    const addressContent = '<strong>Cuauhtemoc 1707, Col. Puerto México, Coatzacoalcos, Veracruz.</strong>';

    // Crear el InfoWindow
    const infoWindow = new _window.google.maps.InfoWindow({
      content: addressContent,
    });
  
    // Abrir el InfoWindow al hacer clic en el marcador
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  
    // Guardar referencia al marcador
    markerRef.current = marker;
    return () => {
      marker.setMap(null); // Eliminar el marcador del mapa

      // Limpia los recursos del mapa al desmontar el componente si es necesario
    };
  }, []);
  return (
    <section className='section' id='contact'>
      <h1>Contáctanos</h1>
      <article className='section-contact'>
        <div className='contact-us-message-wrapper'>
          <h2 className='contact-us-message'>
            !Por favor envíanos un mensaje y nuestro equipo de ventas en breve te contactará!
          </h2>
        </div>
        <div ref={mapRef} id='map'></div>

        <form onSubmit={onSubmit}>
          <div className="field">
            <label className="label has-text-white">Nombre:</label>
            <div className="control">
              <input
                className={`input ${errors.name && 'is-danger'}`}
                type="text"
                placeholder="Nombre completo (entre 5 y 50 caracteres)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {errors.name && <p className="help is-danger">{errors.name}</p>}
          </div>

          <div className="field">
            <label className="label has-text-white">Correo:</label>
            <div className="control">
              <input
                className={`input ${errors.email && 'is-danger'}`}
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>

          <div className="field">
            <label className="label has-text-white">Mensaje:</label>
            <div className="control">
              <textarea
                className={`textarea ${errors.message && 'is-danger'}`}
                placeholder="Escribe tu mensaje aquí (entre 10 y 1000 caracteres)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            {errors.message && <p className="help is-danger">{errors.message}</p>}
          </div>

          <div style={{ display: 'inline-block' }} ref={reCaptchaRef}></div>
          {errors.token && <p className="help is-danger">{errors.token}</p>}

          <br />
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Contactar</button>
            </div>
          </div>
        </form>

      </article>
    </section>
  );
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
}