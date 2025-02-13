import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faGlobeAmericas} />
      <p>my travel journal.</p>
    </div>
  );
}
