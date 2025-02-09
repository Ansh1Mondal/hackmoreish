import Image from "next/image";
import { Card } from "react-bootstrap";

export default function Cards({title,url,width,height,alt,description}) {
  return (
    <Card className="card col-xs-12 col-sm-4 ">
      <div className="d-flex justify-content-center">
            <Image
            variant="top"
            src={url}
            width={width}
            height={height}
            alt={alt}
            className="img-card"
            />
      </div>
      <Card.Body className="card-content">
        <Card.Title className="card-title text-center">{title}</Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
