import './Habilidades.css';
import { Habilidad } from './Habilidad';

export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <h2 className="subtitulo">Lenguajes</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="html" name="HTML 5" />
        <Habilidad icon="css" name="CSS 3" />
        <Habilidad icon="javascript" name="JavaScript" />
        <Habilidad icon="java" name="Java" />
      </div>
      <h2 className="subtitulo">Frameworks</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="react" name="React" />
        <Habilidad icon="spring" name="Spring" />
      </div>
      <h2 className="subtitulo">Bases de Datos</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="mysql" name="MySQL" />
        <Habilidad icon="postgresql" name="PostgreSQL" />
      </div>
      <h2 className="subtitulo">IDEs (entornos de desarrollo)</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="vscode" name="Visual Studio Code" />
        <Habilidad icon="idea" name="IntelliJ IDEA" />
      </div>
      <h2 className="subtitulo">Herramientas de Desarrollo</h2>
      <div className="row justify-content-center mt-5">
        <Habilidad icon="git" name="Git" />
        <Habilidad icon="github" name="GitHub" />
        <Habilidad icon="vite" name="Vite" />
        <Habilidad icon="postman" name="Postman" />
        <Habilidad icon="vitest" name="Vitest" />
      </div>
    </div>
  );
};