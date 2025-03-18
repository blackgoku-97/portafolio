export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-2 mb-4">
          <div className="card" style={{ border: 'none !important' }}>
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="html-5"
            />
            <p>HTML 5</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-5">
          <div className="card" style={{ border: 'none !important' }}>
            <img src="https://skillicons.dev/icons?i=css" alt="css3" />
            <p>CSS 3</p>
          </div>
        </div>
        <div className="col-sm-2 mb-4 mx-5">
          <div className="card" style={{ border: 'none !important' }}>
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript"
            />
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};