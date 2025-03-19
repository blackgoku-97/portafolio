import { NavLink } from 'react-router-dom';

export const Contacto = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">¡Contáctame!</h1>
      <p>Puedes contactarme a través de los siguientes medios:</p>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <NavLink to="mailto:rpe19971210gmail.com" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=gmail" alt="Gmail" />
          </NavLink>
          <h5>Correo Electronico</h5>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="https://www.linkedin.com/in/ricardo-perez-a31474229/" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
          </NavLink>
          <h5>LinkedIn</h5>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="https://github.com/blackgoku-97" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=github" alt="GitHub" />
          </NavLink>
          <h5>GitHub</h5>
        </div>
      </div>
    </div>
  )
}