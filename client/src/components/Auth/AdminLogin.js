// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import fireAdmin from '../../config/adminConfig';

// class AdminLogin extends Component {
//     state = {
//         email: '',
//         password: '',
//         error: null,
//     };
//     handleInputChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { email, password } = this.state;
//         fireAdmin
//             .auth()
//             .signInWithEmailAndPassword(email, password)
//             .then((user) => {
//                 this.props.history.push('/admin');
//             })
//             .catch((error) => {
//                 this.setState({ error: error });
//             });
//             console.log(this.state);

//     };
//     render() {
//         const { email, password } = this.state;
//         return (
//             <div className="container" >
//                 <div className="row">
//                     <div className="col-md-8" style={{background: "white", marginTop: "20px"}}>
//                         <h3>Admin Log In</h3>
//                         <form onSubmit={this.handleSubmit}>
//                             <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange}></input>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={this.handleInputChange}
//                             ></input>
//                             <button children="Log In"></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default withRouter(AdminLogin);






// // import React, { Component } from 'react';
// // import fireAdmin from '../../config/adminConfig';

// // class AdminLogin extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.login = this.login.bind(this);
// //         this.handleChange = this.handleChange.bind(this);
// //         this.state = {
// //             email: '',
// //             password: ''
// //         };
// //     }

// //     handleChange(e) {
// //         this.setState({ [e.target.name]: e.target.value });
// //     }

// //     login(e) {
// //         e.preventDefault();
// //         fireAdmin.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
// //         }).catch((error) => {
// //             console.log(error);
// //         });
// //     }



// //     render() {
// //         return (

// //             <div className="col-md-6">
// //                 <form>
// //                     <div className="form-group">
// //                         <label htmlFor="exampleInputEmail1">Email address</label>
// //                         <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
// //                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
// //                     </div>
// //                     <div className="form-group">
// //                         <label htmlFor="exampleInputPassword1">Password</label>
// //                         <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
// //                     </div>
// //                     <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
// //                     <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
// //                 </form>

// //             </div>
// //         );
// //     }
// // }
// // export default AdminLogin;




