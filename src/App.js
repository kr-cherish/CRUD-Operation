import { useState } from "react";
import AddUser from "./component/addUser";
import UserList from "./component/userList";
import EditUser from "./component/EditUser";

const initialUsers = [
  { id: 1, name: "meet", email: "meet@example.com" },
  { id: 2, name: "yash", email: "yash@example.com" },
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);

  
  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null); 
  };

  return (
    <div>
      <h1>React CRUD App</h1>
      {editingUser ? (
        <EditUser user={editingUser} updateUser={updateUser} />
      ) : (
        <AddUser addUser={addUser} />
      )}
      <UserList users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
    </div>
  );
}
