import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import books from "./assets/fantasy.json";
import { Container } from "react-bootstrap";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div>
      <Container>
        <WarningSign atext="Alert-san have mercy" />
        <div>
          <MyBadge badgetext="9" badgecolor="danger" />
        </div>

        <BooksList books={books} />
      </Container>
    </div>
  );
}

export default App;
