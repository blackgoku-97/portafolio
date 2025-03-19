export const Contacto = () => {

  return (
    <div className="text-center">
      <h1 className="mb-5">¡Contáctame!</h1>
      <p className='mb-5'>Puedes contactarme a través de los siguientes medios:</p>
      <div className="row justify-content-center">
        <div className="col-md-3 mb-3">
          <a href="https://www.linkedin.com/in/ricardo-perez-a31474229/" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
          </a>
          <h5 className="mt-3">LinkedIn</h5>
        </div>
        <div className="col-md-3 mb-3">
          <a href="https://github.com/blackgoku-97" target="_blank">
            <img className='w-25' src="https://skillicons.dev/icons?i=github" alt="GitHub" />
          </a>
          <h5 className="mt-3">GitHub</h5>
        </div>
        <div className="col-md-3 mb-3">
          <a href="https://app.aluracursos.com/emprega-one/profile/rpe19971210" target="_blank">
            <img className='w-25' src="https://app.aluracursos.com/assets/images/logos/logo-aluraespanhol.png" alt="Alura Latam" />
          </a>
          <h5 className="mt-3">EmpleaOne</h5>
        </div>
      </div>
    </div>
  )
}