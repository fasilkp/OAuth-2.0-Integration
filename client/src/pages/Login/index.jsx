import styles from "./styles.module.css";
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
						<GoogleLogin
							clientId="572510792166-vpf7ki1vmt5t7u4er1afdsgn7oe1l1l9.apps.googleusercontent.com"
							buttonText="Login with Google"
							onSuccess={googleAuth}
							onFailure={googleAuth}
							cookiePolicy={'single_host_origin'}
						/>
				</div>
			</div>
		</div>
	);
}

export default Login;
