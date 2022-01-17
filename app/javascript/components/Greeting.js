import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreeting } from "../redux/reducers/greetingReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Greeting of the day:</h1>
        <p> {message}</p>
      </div>
    </React.Fragment>
  );
}

export default Greeting;
