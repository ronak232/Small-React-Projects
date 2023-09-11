import React, { useState } from "react";
import useFetchApi from "./useFetchApi";

function DynamicTabs() {
  const { responseData, loading } = useFetchApi(
    "https://mocki.io/v1/4413ac7f-97c0-4a50-963a-cf3c4bc4ec97"
  );
  console.log(responseData);
  const [value, setvalues] = useState(2);
  const { id, name, picture, skills, experience, summary } =
    responseData[value] || [];

  const handleChangeProfile = (index) => {
    setvalues(index);
  };

  return (
    <>
      <div>
        <p className="text-center">Employee Details</p>
        {loading ? (
          <h4>loading...</h4>
        ) : (
          <div className="container p-3">
            <div className="d-flex flex-wrap flex-md-nowrap" key={id}>
              <div className="profile-aside w-25 m-2">
                {responseData.map((items, index) => {
                  return (
                    <button
                      className="w-100 btn btn-primary mt-2 mb-2"
                      key={items.id}
                      onClick={() => handleChangeProfile(index)}
                    >
                      {items.name}
                    </button>
                  );
                })}
              </div>
              <div className="profile-description w-75">
                <p className="profile-summary">{summary}</p>
                <div className="d-block">
                  <img className="img-responsive" src={picture} alt="" />
                </div>
                <h3>{name}</h3>
                <div className="skills-container">
                  {skills.map((sk) => {
                    return (
                      <ul className="profile-skills">
                        <li className="profile-items">{sk}</li>
                      </ul>
                    );
                  })}
                </div>
                <div className="profile-experience">
                  {experience.map((items) => {
                    console.log(items);
                    <div>
                      <span>{items.title}</span>
                    </div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DynamicTabs;
