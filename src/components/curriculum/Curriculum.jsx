const Educacion = () => {
  return (
    <div className="col-md-6">
      <h2 className="text-center title">
        <i className="fas fa-graduation-cap"></i> Educación
      </h2>
      <ul className="list-group">
        <li className="list-group-item">
          <h3 className="text-center">Técnico en Analista Programador</h3>
          <p> Instituto Profesional y Centro de Formacion Técnica (INACAP) (2017-2019)</p>
          <p>Modalidad: Presencial</p>
        </li>
        <li className="list-group-item">
          <h3 className="text-center">Ingenieria Informática</h3>
          <p> Universidad Tecnológica de Chile (INACAP) (2020-2022)</p>
          <p>Modalidad: Remota</p>
        </li>
        <li className="list-group-item">
          <h3 className="text-center">Programa de AlumniOne</h3>
          <p> Alianza entre Oracle y Alura (One Next Education) (2024-2025)</p>
          <p>Modalidad: Remota</p>
        </li>
      </ul>
    </div>
  );
};

const Experiencia = () => {
  return (
    <div className="col-md-6">
      <h2 className="text-center title">
        <i className="fas fa-briefcase"></i> Experiencia laboral
      </h2>
      <ul className="list-group">
        <li className="list-group-item">
          <h3 className="text-center">Practica Empresa Himce (2019)</h3>
          <ul className="list-group">
            <li className="list-group-item text-center">Desarrollo y diseño de pagina web</li>
            <h4 className="text-center">Logros</h4>
            <p className="text-center">Conociendo github, framework laravel y aprendiendo a usarlo</p>
          </ul>
        </li>
        <li className="list-group-item">
          <h3 className="text-center">Practica Empresa BETECH (2022)</h3>
          <ul className="list-group">
            <li className="list-group-item text-center">Desarrollo y diseño de pagina web con framework laravel para un buen mantenimiento</li>
            <h4 className="text-center">Logros</h4>
            <p className="text-center">Conociendo en primer plano la habilidad blanda: Trabajo en equipo</p>
          </ul>
        </li>
        <li className="list-group-item">
          <h3 className="text-center">Desarrollador Web, Proyectos personales (2024-2025)</h3>
          <ul className="list-group">
            <li className="list-group-item text-center">Desarrollo de un Conversor de Monedas Utilizando Java y Exchange Rates API</li>
            <li className="list-group-item text-center">Creación de una libreria y autores Utilizando Java y Spring y PostgreSQL</li>
            <li className="list-group-item text-center">Desarrollo de un CRUD utilizando Java y Spring para un foro Utilizando Java, Spring, MySQL</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

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