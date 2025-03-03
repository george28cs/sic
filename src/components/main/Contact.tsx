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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

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
            sitekey: '6LcsiNsmAAAAAL4T2ZngQgXA_4i4wTrTFk6viROf',
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

  const onSubmit = async (e) => {
    e.preventDefault();
    validate();
    setIsLoading(true);

    try {
      const bodyString = JSON.stringify({
        name,
        email,
        message,
        token,
      });
      console.log(bodyString)
      const response = await fetch('https://us-central1-superb-tendril-391216.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyString,
      });

      if (response.ok) {
        setIsSuccess(true);
        clear();
        // Aquí puedes mostrar el alert o realizar otras acciones
        alert('El mensaje se envió correctamente');
      } else {
        setIsError(true);
        // Aquí puedes mostrar el modal de error o realizar otras acciones
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setIsError(true);
      // Aquí puedes mostrar el modal de error o realizar otras acciones
      alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const mapRef = useRef(null);

  useEffect(() => {
    const map = new _window.google.maps.Map(mapRef.current, {
      center: { lat: 18.14887, lng: -94.4414113 }, 
      zoom: 12,
      zoomControl: true, // Habilitar control de zoom
      mapTypeControl: false, // Desactivar el control de tipo de mapa
    });

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
              <button type="submit" className="button is-link" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Contactar'}
              </button>
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
