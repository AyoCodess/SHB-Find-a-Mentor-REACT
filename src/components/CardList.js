import React from "react";
import Card from "../components/Card";

const CardList = ({ people }) => {

    console.log(people)



  return (
    <>
   {(people.length === 0 ) ?  <h1>No Mentor Found, please try another name or title.</h1> :

    <div className="tc card-container">
      {people.map((user, i) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            title={user.title}
            website={user.website}
            linkedin={user.linkedin}
            twitter={user.twitter}
            instagram={user.instagram}
            facebook={user.facebook}
            location={user.location}
            job={user.job}
            messenger={user.messenger}
          />
        );
      })}
    </div> }

    </>
  );
};

export default CardList;
