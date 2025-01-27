import ParticlesBackground from "./components/ParticlesBackground";
import "./styles.css";
import useScreenHandlers from "./utils/screenHandler";

/* TODO:
    # Tidying Up
  - Replace string references to theme types to config location.
  - Tidy up & extract code across project.

    # Fix
  - Card loading face-up when Deck clicked during card-flip animation
    - Likely cause useEffect on card clashing with setTimeout on handleClick  
*/

function App() {
  const { renderScreen } = useScreenHandlers();

  return (
    <>
      <ParticlesBackground />
      <div className="App">{renderScreen()}</div>
    </>
  );
}

export default App;
