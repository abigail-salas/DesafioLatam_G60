import { Card } from "react-bootstrap";


const PostCard = ({ post }) => {
  const { title, photo, color, description } = post;

  return (
    <Card
      style={{ background: color }}
      className="text-dark"
    >
      <Card.Img
        variant="top"
        src={photo}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default PostCard;
