import Card from "../Card";
import styles from "./UsersList.module.css";

const UserList = ({ list }) => {
  return (
    <Card>
      <ul className={styles.users}>
        {list.map((data) => (
          <li key={data.id}>
            {data.username} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
