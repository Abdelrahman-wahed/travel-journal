import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
type JournyProps ={
  [key:string]:any;
}
export default function Journy(props:JournyProps) {
  return (
    <div className="journy">
      <img src={props.img} alt={props.TouristLandmark} />
      <div className="content">
        <div className="text">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="country">{props.country}</span>
          <a className="maps" href="#">
            View on Google Maps
          </a>
        </div>
        <h1 className="Landmark">{props.TouristLandmark}</h1>
        <p className="time">{props.time}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}
