import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";
import WariningSign from "./components/WarningSign";

import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <WariningSign atext="Alert-san" />
      <MyBadge badgetext="7" badgecolor="danger" />
      <BooksList />
    </div>
  );
}

export default App;
