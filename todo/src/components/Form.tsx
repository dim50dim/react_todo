import React, { useState } from 'react'



const Form = () => {
    const [newName,setNewName] = useState('');
    function handleChange(e): void {
  console.log(e.target.value);
}
   function handleChange(e)  {
    setNewName(e.target.value)
   }
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <div>
       <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  )
}

export default Form
