import React, {useState} from "react";

function ListingCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const itemID = props.item.id;
  console.log(itemID);

  function handleDelete(event){
    event.preventDefault();

    props.onDelete(itemID);
  }

  function handleFavorite(event) {
    event.preventDefault();
    setIsFavorite((isFavorite) => !isFavorite);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={`http://localhost:6001/${props.img}`} alt={props.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button  onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{props.item.description}</strong>
        <span> · {props.item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
