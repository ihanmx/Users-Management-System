"use client";

import { useParams } from "next/navigation";
import useGetUser from "../hooks/useGetUser";

const UserDetails = () => {
  const params = useParams<{ id: string }>();
  const userId = Number(params.id);

  const { data, isPending, isError, error } = useGetUser(userId);

  if (isPending) return <p>Loading user details...</p>;
  if (isError) return <p className="text-red-600">Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {data.id}</p>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserDetails;
