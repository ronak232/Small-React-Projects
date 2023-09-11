import { useContext, useState } from "react";
import ReviewsContext from "../hooks/useContextApi";

function ProfileList() {
  const { profilesList } = useContext(ProfileContext);
  const [index, setindex] = useState(0);

  const { id, name, email, avatar } = reviewsList[index] || {};

  // Case to check the list of items are valid with the length of the array.
  const checkTheListItems = (number) => {
    // checking if the items index is greater than the last index..
    if (number > profilesList.length - 1) {
      return 0;
    }
    // Checking if the items index is smaller than the first index.
    if (number < 0) {
      return setindex(reviewsList.length - 1);
    }
    return number;
  };

  // To handle the next person in the list.
  const handleNextThoughts = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkTheListItems(newIndex);
    });
  };

  // To handle the previous person in the list.
  const handlePrevThoughts = () => {
    setindex((index) => {
      let newIndex = index - 1;

      return checkTheListItems(newIndex);
    });
  };

  if (profilesList.length > 0) {
    return (
      <>
      <div className="container">
        <h3 style={{ textAlign: "center", fontSize:"28px" }}>Fake Github Data</h3>
        <div className="profile" key={id}>
          <div className="profile__cards">
            <h2 className="profile__name">{name}</h2>
            <p className="profile__email">{email}</p>
            <div className="profile__images">
              <img src={avatar} alt="" />
            </div>
            
            <button className="btn-prev" onClick={handlePrevThoughts}>
              prev
            </button>
            <button className="btn-next" onClick={handleNextThoughts}>
              next
            </button>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default ProfileList;
