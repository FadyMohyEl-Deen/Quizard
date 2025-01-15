import React from "react";

function UserProfile({ params }) {
  return (
    <>
      <h1 className="text-center font-extrabold pt-10">User {params.id}</h1>
    </>
  );
}

export default UserProfile;
