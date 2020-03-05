import React from "react";

function PuppyList(props) {
  return (
    <ol>
      {props.puppies.map(puppy => {
        return (
          <li key={puppy.name}>
            <h2>
              {puppy.name} {props.selectedPuppy === puppy.name && "👑"}
            </h2>
            <p>cuteness ranking of {puppy.cuteness}</p>
            <button onClick={() => props.addCuteness(puppy.name)}>
              I'm super cute +1!
            </button>
            <button onClick={() => props.changeSelectedPuppy(puppy.name)}>
              pick me to be pup of the week
            </button>
            <button onClick={() => props.deleteSelectedPupper(puppy.name)}>
              delete pupper from list
            </button>
            {props.puppiesDisplayed && <img src={puppy.url} alt={puppy.name} />}
          </li>
        );
      })}
    </ol>
  );
}

export default PuppyList;
