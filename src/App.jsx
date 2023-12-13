import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/user')
      .then(res => res.json())
      .then(data => setData(data))  // Set the data to state
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>EmailId</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.Name}</td>
              <td>{d.EmailId	}</td>
              <td>{d.status}</td>
              <td>{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
   
  );
}

export default App;

// import React from 'react'
// import { MediaRenderer } from "@thirdweb-dev/react";

// function App() {
//   return (
//     <div>
//     <h1>HELLO</h1>
//       <MediaRenderer src="ipfs://bafybeieptmeuqwoguuw6742ctl6jda732aeezalvtd7rmym7pyfszg7jli/" />
//     </div>
//   )
// }

// export default App