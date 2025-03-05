import { useState } from "react";

export default function EditUser({ user, updateUser }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedUser.name}
        onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
      />
      <input
        type="email"
        value={updatedUser.email}
        onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  );
}
