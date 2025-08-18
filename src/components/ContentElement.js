import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ContentElement.css";

export function ContentElement({ image, title, description, link, hashtags, buttonText }) {
  return (
    <Card className="content-element">
      <Card.Img variant="top" src={image} alt={title} className="img-thumbnail" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        
        {/* New div to keep Read More & hashtags together */}
        <div className="card-footer">
          {link && (
            <Button href={link} target="_blank" rel="noopener noreferrer">
              {buttonText || "Read More"}
            </Button>
          )}
          <div className="content-hashtags">
            {hashtags.map((tag, index) => (
              <span key={index} className="hashtag">
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </Card.Body>
    </Card>
  );
}
