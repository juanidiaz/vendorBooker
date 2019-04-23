// import React, { Component } from "react";
// import { BrowserRouter as Router,  Link  } from "react-router-dom";
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// // import UserHome from "./UserHome";
// // import Book from "./Book";

// // firebase.initializeApp({
// //     apiKey: "AIzaSyBl4LH1flUCZR1mD8HjRdJdC3066qm1Ehw",
// //     authDomain: "amazingpetgrooming-525b7.firebaseapp.com"
// // })

// class LoginClient extends Component {

//     state = { isSignedIn: false }
//     uiConfig = {
//         signInFlow: "popup",
//         signInOptions: [
//             // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             firebase.auth.EmailAuthProvider.PROVIDER_ID
//         ],
//         callbacks: {
//             signInSuccess: () => false
//         }
//     }

//     componentDidMount = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             this.setState({ isSignedIn: !!user })
//             console.log("user", user)
//         })
//     }

//     render() {
        
//         // const PrivateRoute = ({ component: Component, ...rest }) => {
//         //     <Route {...rest} render={(props) => (
//         //         this.state.isSignedIn === true
//         //         ? <Component {...props}/>
//         //         : <Redirect to="/clientlogin" />
//         //     )}/>
//         // }

//         return (

//             <Router>
//                 <div>
//                     <ul>
//                         <li><Link to="/booking"></Link></li>
//                         <li><Link to="/client"></Link></li>

//                     </ul>

//                     {/* <Route path="/client"component={UserHome} />
//                     <PrivateRoute path="/booking" component={Book} />
//                     <PrivateRoute path="/client" component={UserHome} /> */}

//                 </div>

//                 <div>
//                     <div className="App">
//                         {this.state.isSignedIn ? (
//                             <span>
//                                 <div>Signed In!</div>
//                                 <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//                                 <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//                                 <img
//                                     alt="profile img"
//                                     src={firebase.auth().currentUser.photoURL}
//                                 />
//                             </span>
//                         ) : (
//                                 <StyledFirebaseAuth
//                                     uiConfig={this.uiConfig}
//                                     firebaseAuth={firebase.auth()}
//                                 />
//                             )}
//                     </div>

//                 </div>
//             </Router>
//         );
//     }
// }

// export default LoginClient;