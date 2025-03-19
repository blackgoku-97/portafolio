import { NavLink } from 'react-router-dom';

export const Contacto = () => {
  return (
    <div className="text-center">
      <h1 className="mb-5">¡Contáctame!</h1>
      <p className='mb-5'>Puedes contactarme a través de los siguientes medios:</p>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
          <NavLink to="mailto:rpe19971210@gmail.com" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=gmail" alt="Gmail" />
          </NavLink>
          <h5 className="mt-3">Correo Electronico</h5>
        </div>
        <div className="col-md-3 mb-3">
          <NavLink to="https://www.linkedin.com/in/ricardo-perez-a31474229/" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
          </NavLink>
          <h5 className="mt-3">LinkedIn</h5>
        </div>
        <div className="col-md-3 mb-3">
          <NavLink to="https://github.com/blackgoku-97" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=github" alt="GitHub" />
          </NavLink>
          <h5 className="mt-3">GitHub</h5>
        </div>
        <div className="col-md-3 mb-3">
          <NavLink to="" target="_blank">
            <img className='w-25' src="https://logodownload.org/wp-content/uploads/2017/04/alura-logo-1.png" alt="Alura Latam" />
          </NavLink>
          <h5 className="mt-3">EmpleaOne</h5>
        </div>
      </div>
    </div>
  )
}