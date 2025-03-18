export const Habilidades = () => {
  return (
    <div id="Habilidades" className="container mt-5">
      <h1 className="titulo text-center">Habilidades</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://img.icons8.com/color/100/html-5--v1.png"
              alt="html-5--v1"
            />
            <p>Html5</p>
          </div>
        </div>
        <div className="col-md-3 mb-4 mx-5">
          <div className="card">
            <img src="https://img.icons8.com/color/100/css3.png" alt="css3" />
            <p>css3</p>
          </div>
        </div>
        <div className="col-md-3 mb-4 mx-5">
          <div className="card">
            <img
              src="https://img.icons8.com/color/100/javascript--v1.png"
              alt="javascript--v1"
            />
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
