import React, { useState } from "react";
import Card from "./Card";
import data from "./data.json";

const Cards = () => {
  const [search, setSearch] = useState("");
  const renderProfile = (personName) => {
    return (
      <Card
        name={personName.name}
        email={personName.email}
        source={personName.source}
      />
    );
  };
  const filteredProfiles = data.filter((personName) => {
    return personName.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return (
    <div className="searchBox">
      <br></br>
      <br></br>
      <input
        className="Input"
        type="text"
        placeholder="Enter name of the person"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredProfiles.map((personName) => {
          return renderProfile(personName);
        })}
      </div>
    </div>
  );
};

export default Cards;
