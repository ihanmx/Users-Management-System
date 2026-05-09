"use client";
import useGetUsers from "../hooks/useGetUsers";
import React from "react";

const Users = () => {
  const { data, isPending } = useGetUsers();
  if (isPending) return <div>Loading...</div>;
  if (!data) return <div>No users found</div>;
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.id}</h2>
          <p>
            {user.name} - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
