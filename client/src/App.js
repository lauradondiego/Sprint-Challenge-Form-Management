import React from "react";
import "./App.css";
import FormikForm from "./components/Form";
import FormInfo from "./components/FormInfo";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       username: "",
//       password: []
//     };
//   }

//   componentDidMount() {
//     this.getInfo();
//     this.postInfo();
//   }

// }
// getInfo = () => {
//   fetch(`https://api.github.com/users/lauradondiego`)
//     .then(response => {
//       // first promise resolution is used to format the data.
//       return response.json();
//     })
//     .then(response => {
//       // secon promise resolution is where you set the data.

//       console.log("working", response);
//       this.setState({
//         users: response
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// fetchFollowers = () => {
//   fetch(`https://api.github.com/users/lauradondiego/followers`)
//     .then(response => {
//       // first promise resolution is used to format the data.
//       return response.json();
//     })
//     .then(response => {
//       console.log("followers", response);
//       this.setState({
//         followers: response
//       });
//     });
// };

// render() {
//   return (
//     <FormikForm />
//     <Card className="laura">
//       <h1 className="header">My GitHub Info</h1>
//       <Image
//         src={this.state.users.avatar_url}
//         width="150"
//         wrapped
//         ui={false}
//       />
//       <h2>{this.state.users.name}</h2>
//       <p>Bio: {this.state.users.bio}</p>
//       <p>Location: {this.state.users.location}</p>
//       <p>So Many Followers: {this.state.users.followers}</p>

//       {this.state.followers.map(follower => (
//         <UserCard followers={follower} />
//       ))}
//     </Card>
//   );
// }
// }

// export default App;

function App() {
  return (
    <div className="App">
      <FormikForm />
      <FormInfo />
    </div>
  );
}

export default App;
