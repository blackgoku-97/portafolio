export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 mb-4">
          <div className="card border-0 text-light">
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="html5"
            />
            <p>HTML 5</p>
          </div>
        </div>
        <div className="col-md-3 mb-4 mx-5">
          <div className="card border-0 text-light">
            <img src="https://skillicons.dev/icons?i=css" alt="css3" />
            <p>CSS 3</p>
          </div>
        </div>
        <div className="col-md-3 mb-4 mx-5">
          <div className="card border-0 text-light">
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="javascript"
            />
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};