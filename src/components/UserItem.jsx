import React from "react";

function UserItem(props) {
  const { name, email, isGoldClient, wage, src } = props;

  return (
    <div className="user-item">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{wage}</p>
      <img src={src} alt="" />
      {isGoldClient ? <h3>Client GOLD</h3> : null}
    </div>
  );
}

export default UserItem;
