import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function UserPage(props) {
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true,
  }

  // Getter and setter for user state
  const [user, setUser] = useState(initialUserState);

  // Using useEffect to retrieve data from an API
  useEffect(() => {
    const getUser = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`);
      
      // Update state
      setUser(data);
    }

    // Invoke the async func
    getUser();
  }, []) // Don't forget the `[]`, which will prevent useEff from running in an infinite loop

  // Return a table with some from the API
  return user.loading ? (
    <div>Loadding..</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>
    </div>
  )
}