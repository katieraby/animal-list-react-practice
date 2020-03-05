import React from "react";

const PuppyForm = () => {
  return (
    <div className="formContainer">
      <form className="PuppyForm">
        <h2>Add a pupper to the list!</h2>
        {/* {//need name, url and cuteness in an obj to add to array */}
        <label>
          Name:<input type="text" placeholder="Enter name"></input>
        </label>
        <label>
          Image URL: <input type="text" placeholder="Enter image URL"></input>
        </label>
        <label>
          Cuteness level:
          <input type="number" placeholder="Enter cuteness level"></input>
        </label>
      </form>
    </div>
  );
};

export default PuppyForm;
