import "./loginthrough.css";

const clientid = "";

const LoginTh = () => {
  const google = (res) => {
    console.log(res);
  };

  const facebook = () => {};

  const github = () => {};

  return (
    <div className="new">
      <button onClick={google}>Google</button>
      <br></br>

      <button onClick={facebook}>Facebook</button>
      <br></br>

      <button onClick={github}>Github</button>
    </div>
  );
};

export default LoginTh;
