import './Habilidades.css';

export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <h2 className="subtitulo text-center">Lenguajes</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=html" alt="html-5" />
            <p className='text-light text-center'>HTML 5</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=css" alt="css3" />
            <p className='text-light text-center'>CSS 3</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=javascript" alt="javascript" />
            <p className='text-light text-center'>JavaScript</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=java" alt="java" />
            <p className='text-light text-center'>Java</p>
          </div>
        </div>
      </div>
      <h2 className="subtitulo text-center mt-5">Frameworks</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=react" alt="react" />
            <p className='text-light text-center'>React</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=spring" alt="spring" />
            <p className='text-light text-center'>Spring</p>
          </div>
        </div>
      </div>
      <h2 className="subtitulo text-center mt-5">Bases de Datos</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
            <p className='text-light text-center'>MySQL</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=postgresql" alt="postgresql" />
            <p className='text-light text-center'>PostgreSQL</p>
          </div>
        </div>
      </div>
      <h2 className="subtitulo text-center mt-5">IDEs (entornos de desarrollo)</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=vscode" alt="vscode" />
            <p className='text-light text-center'>Visual Studio Code</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=idea" alt="intellij" />
            <p className='text-light text-center'>IntelliJ IDEA</p>
          </div>
        </div>
      </div>
      <h2 className="subtitulo text-center mt-5">Herramientas de Desarrollo</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=git" alt="git" />
            <p className='text-light text-center'>Git</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=github" alt="github" />
            <p className='text-light text-center'>GitHub</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=vite" alt="vite" />
            <p className='text-light text-center'>Vite</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-3">
          <div className="card">
            <img src="https://skillicons.dev/icons?i=postman" alt="postman" />
            <p className='text-light text-center'>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};