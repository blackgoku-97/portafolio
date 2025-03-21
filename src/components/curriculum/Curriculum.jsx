import { Educacion } from './Educacion';
import { Experiencia } from './Experiencia';

export const Curriculum = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center title">
            <i className="fas fa-user"></i> Desarrollador Web Junior: Apasionado por la tecnología y el diseño
          </h1>
          <p className="text-center">
            Desarrollador Web Junior apasionado por el desarrollo web. Con una
            sólida formación en ingeniería informática, me caracterizo por ser
            organizado, responsable y proactivo. Estoy ansioso por unirme a un
            equipo dinámico y desafiante donde pueda aplicar mis habilidades y
            continuar aprendiendo y creciendo como profesional.
          </p>
        </div>
      </div>
      <div className="row">
        <Educacion />
        <Experiencia />
      </div>
    </div>
  );
};