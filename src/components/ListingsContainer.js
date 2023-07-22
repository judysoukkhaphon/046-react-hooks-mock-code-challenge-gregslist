import React, { useState, useEffect, useTransition } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then((response)=>response.json())
      .then((list)=> setListings(list));
  }, []);

  function deleteItem(listID) {
    fetch(`http://localhost:6001/listings/${listID}`,{
      method: "DELETE"})
      .then((response) => response.json())
        .then((updatedListings)=> {
          console.log(updatedListings);
        });
  }

  // this didn't work with a .forEach() for some reason
  return (
    <main>
      <ul className="cards">
        {listings.map((item) => {
          return <ListingCard key={item.id} item={item} img={item.image} onDelete={deleteItem}/> 
          }
        )}
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
