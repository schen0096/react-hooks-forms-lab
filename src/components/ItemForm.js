import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')

  function handleItemFormSubmit(e){
    e.preventDefault()
    const newItem = { 
      id: uuid(),
      name: itemName, 
      category: itemCategory 
    }
    onItemFormSubmit(newItem)
  }

  function handleNameChangeEvent(e){
    setItemName(e.target.value)
  }

  function handleCategoryChangeEvent(e){
    setItemCategory(e.target.value)
  }
    

  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChangeEvent} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChangeEvent} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
