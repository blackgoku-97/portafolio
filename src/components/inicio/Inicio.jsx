export const Inicio = () => {

  const title = "👋Hola, soy";
  const nombre = "Ricardo";
  const imagen = "assets/img/coding.png";

  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 text-center">
          <h4 className="text-sm">{title}</h4>
          <h1>{nombre}</h1>
          <h5 className="text-sm">Desarrollador Web</h5>
        </div>
        <div className="col-md-6">
          <img src={imagen} alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};