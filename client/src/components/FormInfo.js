import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FormInfo() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restricted/users")
      .then(response => {
        console.log("returned data", response.data);
        setData(response.data);
      })

      .catch(error => console.log("error", error.response));
  });

    // return <div>{data && data.map(info => (data = { info }))} </div>;
    return data
//   return (
//     <div>
//       {data.map(users => (
//         <div key={users.id}>
//           <p>Username: {data.username}</p>
//           <p>Password: {data.password} </p>
//         </div>
//       ))}
//     </div>
//   );
}
