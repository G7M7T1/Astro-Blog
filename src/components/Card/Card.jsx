import "./Card.scss";

function Card({ blog }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${blog.img})` }}>
      <div className="cardTitle">
        <h1>{blog.title}</h1>
      </div>

      <div className="cardInfo">
        <p className="cardDesc">{blog.description}</p>

        <div className="cardTags">
          Tagged:
          {blog.tags.map((t) => (
            <div className="cardTag" data-tag={t}>
              {t}
            </div>
          ))}
        </div>

        <a className="cardLink" href={blog.url}>
          <span className="linkInner">View</span>
        </a>
      </div>
    </div>
  );
}

export default Card;
