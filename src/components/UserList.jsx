import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  const { users } = props;

  return (
    <div className="user-list">
      <h2>Lista utilizatorilor:</h2>
      {users.map((user, index) => {
        return (
          <UserItem
            id={user.id}
            name={user.name}
            email={user.email}
            wage={user.wage}
            src={user.src}
            isGoldClient={user.isGoldClient}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default UserList;
