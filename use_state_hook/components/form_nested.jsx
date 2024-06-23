import { useState } from "react";

export default function Nestedform() {
  const [person, setPerson] = useState({
    name: "Rishi Kumar Jha",
    artwork: {
      title: "Ram the scion",
      city: "Ranchi",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person,
        title: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>
        First Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
       <br></br>
      <label>
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <label>
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>

      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />

    </>
     
     
  );
}
