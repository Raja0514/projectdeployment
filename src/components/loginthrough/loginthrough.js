import "./loginthrough.css";
const clientid = "";
const LoginTh = () => {
  const google = (res) => {};
  const facebook = () => {};
  const github = () => {};
  return (
    <div className="new">
      <h2>Login Through</h2>
      <div className="button " onClick={google}>
        Google
      </div>
      <div className="button" Click={facebook}>
        Facebook
      </div>
      <div className="button" onClick={github}>
        Github
      </div>
    </div>
  );
};
export default LoginTh;
