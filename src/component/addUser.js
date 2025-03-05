import { useState } from "react";

export default function AddUser({ addUser }) {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;
    addUser(user);
    setUser({ name: "", email: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button type="submit">Add User</button>
    </form>
  );
}
