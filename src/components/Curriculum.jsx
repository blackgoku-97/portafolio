export const Curriculum = () => {
  const datosPersonales = {
    nombre: "Ricardo Perez",
    correoElectronico: "rpe19971210gmail.com",
  };

  const educacion = {
    titulo: "Tecnico Analista Programador",
    universidad: "INACAP",
    fechaGraduacion: "2019",
  };

  const experienciaLaboral = {
    tituloPuesto: "Puesto de ejemplo",
    empresa: "Empresa de ejemplo",
    fechaInicio: "2020",
    fechaFin: "2022",
    descripcion:
      "Descripción breve de tus responsabilidades y logros en el puesto",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-5">Curriculum</h1>
          <div className="row">
            <div className="col-md-4">
              <h2 className="mb-3">Información personal</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nombre:</strong> {datosPersonales.nombre}
                </li>
                <li className="list-group-item">
                  <strong>Correo electrónico:</strong>{" "}
                  {datosPersonales.correoElectronico}
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="mb-3">Educación</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Título de grado:</strong> {educacion.titulo}
                </li>
                <li className="list-group-item">
                  <strong>Universidad:</strong> {educacion.universidad}
                </li>
                <li className="list-group-item">
                  <strong>Fecha de graduación:</strong>{" "}
                  {educacion.fechaGraduacion}
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="mb-3">Experiencia laboral</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Título del puesto:</strong>{" "}
                  {experienciaLaboral.tituloPuesto}
                </li>
                <li className="list-group-item">
                  <strong>Empresa:</strong> {experienciaLaboral.empresa}
                </li>
                <li className="list-group-item">
                  <strong>Fecha de inicio:</strong>{" "}
                  {experienciaLaboral.fechaInicio}
                </li>
                <li className="list-group-item">
                  <strong>Fecha de fin:</strong> {experienciaLaboral.fechaFin}
                </li>
                <li className="list-group-item">
                  <strong>
                    Descripción breve de tus responsabilidades y logros en el
                    puesto:
                  </strong>
                  {experienciaLaboral.descripcion}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
