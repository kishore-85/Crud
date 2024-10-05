function Login(props){
    console.log(props.status)
    return(
        <>
            <div>
                <label>User_Name:</label>
                <input type="text" name="User" placeholder="Enter your username..."></input><br></br>
                <label>Password:</label>
                <input type="password" name="password"></input>
                { props.status == false? <div>
                    <label>Conform Password</label>
                    <input type="text" name="confrom_password"></input>
                </div>
               :null}
               
            </div>
        </>
    )
}
export default Login;