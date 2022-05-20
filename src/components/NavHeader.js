import { withRouter } from "../react-router";

function NavHeader(props) {
  const go = () => {
    props.history.push("/login");
  };
  console.log(props);
  return (
    <div>
      <button onClick={go}>withRouter</button>
    </div>
  );
}

export default withRouter(NavHeader);
