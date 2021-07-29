import React, {useState} from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({handleFormSubmit}) {

  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  function onItemFormSubmit(e){
    e.preventDefault()
    const newItem = { name, category }
    handleFormSubmit(newItem)
  }

  function handleNameChangeEvent(e){
    setName(e.target.value)
  }

  function handleCategoryChangeEvent(e){
    setCategory(e.target.value)
  }
    

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChangeEvent} value={name}/>
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
