import "./style.css";

function ServiceResults(props) {
  return (
    <ul className="list-group service-results">
      {props.services.map(service => (
        <li key={service} className="list-group-item">
          <img alt="Services" src={`/images/${service.images}`} width="200" height="300" alt={''} />
        </li>
      ))}
    </ul>
  );
}

export default ServiceResults;
