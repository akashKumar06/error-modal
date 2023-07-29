import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = ({onAddData}) => {
  const [userInput, setUserInput] = useState({});

  function changeHandler(event) {
    setUserInput((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    onAddData(userInput);
  }
  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" id="username" onChange={changeHandler} />
      </div>
      <div>
        <label>Age(Years)</label>
        <input type="text" onChange={changeHandler} id="age" />
      </div>
      <div>
        <button type="submit" className="btn" onChange={changeHandler}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUser;
