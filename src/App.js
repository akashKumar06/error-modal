import "./App.css";
import Card from "./components/Card";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UsersList/UsersList";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const addDataHandler = (userInput) => {
    setUserData((prevData) => ([...prevData,{...userInput,id: Math.random().toString()}]));
    console.log(userData);
  };

  return (
    <div className="App">
      <Card>
        <AddUser onAddData={addDataHandler} />
      </Card>
      <Card>
        <UserList list={userData}/>
      </Card>
    </div>
  );
}

export default App;
