import { Button, Badge } from "react-bootstrap";

const MyBadge = (prop) => {
  return (
    <Button variant="primary">
      Badge-kun <Badge variant={prop.badgecolor}>{prop.badgetext}</Badge>
    </Button>
  );
};

export default MyBadge;
