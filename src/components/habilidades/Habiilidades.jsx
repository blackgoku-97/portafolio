import './Habilidades.css';

const Habilidad = ({ icon, name }) => {
  return (
    <div className="col-sm-2 mb-4">
      <div className="card">
        <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} />
        <p className="text-light text-center">{name}</p>
      </div>
    </div>
  );
};

export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <h2 className="subtitulo text-center">Lenguajes</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="html" name="HTML 5" />
        <Habilidad icon="css" name="CSS 3" />
        <Habilidad icon="javascript" name="JavaScript" />
        <Habilidad icon="java" name="Java" />
      </div>
      <h2 className="subtitulo text-center mt-5">Frameworks</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="react" name="React" />
        <Habilidad icon="spring" name="Spring" />
      </div>
      <h2 className="subtitulo text-center mt-5">Bases de Datos</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="mysql" name="MySQL" />
        <Habilidad icon="postgresql" name="PostgreSQL" />
      </div>
      <h2 className="subtitulo text-center mt-5">IDEs (entornos de desarrollo)</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="vscode" name="Visual Studio Code" />
        <Habilidad icon="idea" name="IntelliJ IDEA" />
      </div>
      <h2 className="subtitulo text-center mt-5">Herramientas de Desarrollo</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="git" name="Git" />
        <Habilidad icon="github" name="GitHub" />
        <Habilidad icon="vite" name="Vite" />
        <Habilidad icon="postman" name="Postman" />
      </div>
    </div>
  );
};