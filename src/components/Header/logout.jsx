function Logout(props) {
return (
    <>
        <div>{props.login}</div>
        <div className="logout-box">
            <button onClick={props.LogoutThunk}>Logout</button>
        </div>
    </>
);
}
export default Logout;