import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import GoogleLogin from 'react-google-login';

function Login() {
	const googleAuth = async (response) => {
		console.log(response)
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					{/* <h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p> */}
					{/* <button className={styles.google_btn} >
						<img src="./images/google.png" alt="google icon" /> */}
						{/* <span>Sign in with Google</span> */}
						<GoogleLogin
							clientId="572510792166-vpf7ki1vmt5t7u4er1afdsgn7oe1l1l9.apps.googleusercontent.com"
							buttonText="Login with Google"
							onSuccess={googleAuth}
							onFailure={googleAuth}
							cookiePolicy={'single_host_origin'}
						/>
					{/* </button> */}
					{/* <p className={styles.text}>
						New Here ? <Link to="/signup">Sing Up</Link>
					</p> */}
				</div>
			</div>
		</div>
	);
}

export default Login;
