import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WariningSign from "./components/WarningSign";

import BooksList from "./components/BooksList";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <WariningSign atext="Alert-san" />
      <MyBadge badgetext="7" badgecolor="danger" />
      <SingleBook />
      
    </div>
  );
}

export default App;
