import ParticlesBackground from "./components/ParticlesBackground";
import "./styles.css";
import useScreenHandlers from "./utils/screenHandler";

/* TODO:
    # Component
  - Create LargeCard component to display card information on larger scale.

    # Tidying Up
  - Replace string references to theme types to config location.

    # Polish
  - Transitions for drawing cards
  - Transition for revealing cards
  - Transition for toggling large card
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
