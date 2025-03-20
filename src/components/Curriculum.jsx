export const Curriculum = () => {
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
                  <strong>Nombre:</strong> Juan Pérez
                </li>
                <li className="list-group-item">
                  <strong>Dirección:</strong> Calle 123, Número 456
                </li>
                <li className="list-group-item">
                  <strong>Teléfono:</strong> 1234567890
                </li>
                <li className="list-group-item">
                  <strong>Correo electrónico:</strong> juan.perez@example.com
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="mb-3">Educación</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Título de grado:</strong> Universidad de ejemplo
                </li>
                <li className="list-group-item">
                  <strong>Fecha de graduación:</strong> 2020
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="mb-3">Experiencia laboral</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Título del puesto:</strong> Empresa de ejemplo
                </li>
                <li className="list-group-item">
                  <strong>Fecha de inicio:</strong> 2020
                </li>
                <li className="list-group-item">
                  <strong>Fecha de fin:</strong> 2022
                </li>
                <li className="list-group-item">
                  <strong>Descripción breve de tus responsabilidades y logros en el puesto:</strong>
                  Descripción breve de tus responsabilidades y logros en el puesto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};