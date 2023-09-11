import { useEffect, useState } from "react";
import "./App.css";
import ProfileContext from "./hooks/useContextApi";
import UseFetchApi from "./hooks/useFetchApi";
import ProfileList from "./components/ProfilesList";

function App() {
  const { response, loading } = UseFetchApi();

  // We create a new State values to store the all the comments.
  const [profilesList, setProfilesList] = useState({});

  // To update the list whenever components information are updated.
  useEffect(() => {
    if (response) {
      setProfilesList(response);
    }
  }, [response]);
  return (
    <>
      <div className="App">
        <ProfileContext.Provider value={{ profilesList }}>
          <ProfileList />
        </ProfileContext.Provider>
      </div>
    </>
  );
}

export default App;
