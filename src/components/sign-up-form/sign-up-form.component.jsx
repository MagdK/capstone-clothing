const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form>
                <label>Display name</label>
                <input type="text" required/>

                <label>Email</label>
                <input type="email" required/>

                <label>Password</label>
                <input type="password" required/>

                <label>Confirm password</label>
                <input type="password" required/>
            </form>
        </div>
    )
}

export default SignUpForm;