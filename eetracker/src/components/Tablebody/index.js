import React from "react";

function Tablebody({ users }) {
    console.log(users);
      return (
        <tbody>
            {users.map(user => {
                // console.log(user.name.title)
                return (
              
                    <tr key={user.email}>
                        <td>{user.email}</td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.title}</td>
                    </tr>
                );
            })}
        </tbody>
      )
}

export default Tablebody;
