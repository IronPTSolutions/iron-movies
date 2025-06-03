
import './jumbotron.css';

function Jumbotron({ backgroundImage, title, subtitle }) {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="container h-100 text-white d-flex flex-column gap-1 justify-content-center">
        {title && (<h2 className="mb-0">{title}</h2>)}
        {subtitle && (<p className="mb-0">{subtitle}</p>)}
      </div>
    </div>
  );
}

export default Jumbotron;