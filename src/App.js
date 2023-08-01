// import Card from "./components/UI/Card";
// import AddUser from "./components/Users/AddUser";
// import UserList from "./components/UsersList/UsersList";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    setUsersList((prevState) => {
      return [...prevState,{name:uName,age:uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
