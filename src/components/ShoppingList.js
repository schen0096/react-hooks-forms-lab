import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ setItems, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {return true}
    return item.category === selectedCategory;
  });

  const originalDisplay = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  
  const searchedItems = items.filter((item) => {
    if (search.length > 0 && (item.category === selectedCategory || selectedCategory === "All")){
      return item.name.toLowerCase().includes(search.toLowerCase())
    } 
  })

  function onItemFormSubmit(newItem){
    setItems([...items, newItem])
  }


  const handleSearchedItems = 
    searchedItems.map(item=>{
      return (<Item key={item.id} name={item.name} category={item.category} />
    )})

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        { search.length > 0 ? handleSearchedItems : originalDisplay}
        {/* {originalDisplay} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
