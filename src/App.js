import "./App.css";
import useScreenHandlers from "./utils/screenHandler";

/* TODO:
    # Component
  - Create Deck component to grab theme array.
  - Create Card component to accept array index from deck.
  - Create LargeCard component to display card information on larger scale.

    # Tidying Up
  - Centralise theme and theme types config.
  - Replace string references to theme types to config location.

    # Polish
  - Transitions for drawing cards
  - Transition for revealing cards
  - Transition for toggling large card
*/

function App() {
  const { renderScreen } = useScreenHandlers();

  return <div className="App">{renderScreen()}</div>;
}

export default App;
