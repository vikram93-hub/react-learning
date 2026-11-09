function UserGreetings(props) {

    const welcomeMessage = <h1 className="welcome">Welcome back! {props.name}</h1>;
    
    const loginMessage = <h1 className="login">Please sign up.</h1>;

  return (props.isLoggedIn ? (welcomeMessage) : (loginMessage));
}

UserGreetings.defaultProps = {
  isLoggedIn: false,
  name: 'Guest'
};

export default UserGreetings;