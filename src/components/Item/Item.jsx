export default function Item({ itemId, title, description, url, image} ) {
  return (
    <div className="item-slot">
      <a href={url} class="item-link" >
        <div className="item" id={itemId} >
          <h3>{title}</h3>
          <p>{description}</p>
          <img 
            src={image} 
            alt={title} 
            id="item-link"

            />
        </div>
      </a>
    </div>
  )
}