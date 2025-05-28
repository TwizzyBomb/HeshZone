import './Item.css'

export default function Item({ itemId, title, description, url, image} ) {
  return (
    <div className="item-slot">
      <a href={url} className="item-link" >
        <div className="item" id={itemId} >
          <h2>{title}</h2>
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