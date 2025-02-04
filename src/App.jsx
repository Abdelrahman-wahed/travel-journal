import Header from "./components/Header";
import Journy from "./components/Journy";
import journal from "./journal";
import "./master.css";

function App() {
  let Journys = journal.map((trip) => {
    return <Journy key={trip.country} {...trip} />;
  });
  return (
    <>
      <Header />
      <div className="main">
      {Journys}
      </div>
    </>
  );
}

export default App;
