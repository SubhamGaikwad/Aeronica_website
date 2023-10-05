import React from "react";
import subham from "../../Images/subham.jpg";
const Team = () => {
  return (
    <div>
      <div className="text-center">
        <h1>Meet Our Team</h1>
      </div>
      <div className="text-center">
        <p>
          As being a technology driven company, Aeronica's quality products are
          driven by inspirations,ideas,thoughts,leadership of the team.
        </p>
      </div>
      <div className="flex gap-10">
        <div>
          <img src={subham} />
          <p className="text-center">Subham</p>
        </div>
        <div>
          <img src={subham} />
          <p className="text-center">Subham</p>
        </div>
        <div>
          <img src={subham} />
          <p className="text-center">Subham</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
