import "./App.css";
import "./components/card.jsx";
import Card from "./components/card.jsx";

function App() {
  return (
    <>
      {/* using the components in the react giving them some value for differnt componets or using its bydefult value  */}
      {/* For more detail go look at card detail jsx */}
      <Card
        description="mere meow dhar chod ne kiya sex beti chod no kiya mex"
        username="Ayush"
        post="Enginner"
      />
      <Card
        description="jai ho jai ho jai maa kali maa gori maa meow meow meo"
        post="doctor"
      ></Card>
    </>
  );
}

export default App;
