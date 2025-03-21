export const Habilidad = ({ icon, name }) => {
  return (
    <div className="col-sm-2 mb-4">
      <div className="card habilidad">
        <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} />
        <p className="habilidad-texto text-light">{name}</p>
      </div>
    </div>
  );
};
