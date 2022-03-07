import "./Card.scss";

function Card({ blog }) {
  return (
    <div style={{ backgroundImage: `url(${blog.img})` }}>
      <h1>{blog.title}</h1>
    </div>
  );
}

export default Card;
