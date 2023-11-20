// import { useRef, useState, useEffect } from 'react';
// import {
// 	faCheck,
// 	faTimes,
// 	faInfoCircle,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Login from './Login';
// import axios from '../api/axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
// 	const userRef = useRef();
// 	const errRef = useRef();

// 	const [user, setUser] = useState('');
// 	const [validName, setValidName] = useState(false);
// 	const [userFocus, setUserFocus] = useState(false);

// 	const [pwd, setPwd] = useState('');
// 	const [validPwd, setValidPwd] = useState(false);
// 	const [pwdFocus, setPwdFocus] = useState(false);

// 	const [matchPwd, setMatchPwd] = useState('');
// 	const [validMatch, setValidMatch] = useState(false);
// 	const [matchFocus, setMatchFocus] = useState(false);

// 	const [errMsg, setErrMsg] = useState('');
// 	const [success, setSuccess] = useState(false);

// 	useEffect(() => {
// 		userRef.current.focus();
// 	}, []);

// 	useEffect(() => {
// 		setValidName(USER_REGEX.test(user));
// 	}, [user]);

// 	useEffect(() => {
// 		setValidPwd(PWD_REGEX.test(pwd));
// 		setValidMatch(pwd === matchPwd);
// 	}, [pwd, matchPwd]);

// 	useEffect(() => {
// 		setErrMsg('');
// 	}, [user, pwd, matchPwd]);

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		// if button enabled with JS hack
// 		const v1 = USER_REGEX.test(user);
// 		const v2 = PWD_REGEX.test(pwd);
// 		if (!v1 || !v2) {
// 			setErrMsg('Invalid Entry');
// 			return;
// 		}
// 		try {
// 			const response = await axios.post(
// 				REGISTER_URL,
// 				JSON.stringify({ user, pwd }),
// 				{
// 					headers: { 'Content-Type': 'application/json' },
// 					withCredentials: true,
// 				}
// 			);
// 			// TODO: remove console.logs before deployment
// 			console.log(JSON.stringify(response?.data));
// 			setSuccess(true);
// 			//clear state and controlled inputs
// 			setUser('');
// 			setPwd('');
// 			setMatchPwd('');
// 		} catch (err) {
// 			if (!err?.response) {
// 				setErrMsg('No Server Response');
// 			} else if (err.response?.status === 409) {
// 				setErrMsg('Username Taken');
// 			} else {
// 				setErrMsg('Registration Failed');
// 			}
// 			errRef.current.focus();
// 		}
// 	};

// 	return (
// 		<>
// 			{success ? (
// 				<Login />
// 			) : (
// 				<section >
// 					<p
// 						ref={errRef}
// 						className={errMsg ? 'errmsg' : 'offscreen'}
// 						aria-live="assertive"
// 					>
// 						{errMsg}
// 					</p>
// 					<h1>Register</h1>
// 					<form onSubmit={handleSubmit}>
// 						<label htmlFor="username">
// 							Username:
// 							<FontAwesomeIcon
// 								icon={faCheck}
// 								className={validName ? 'valid' : 'hide'}
// 							/>
// 							<FontAwesomeIcon
// 								icon={faTimes}
// 								className={validName || !user ? 'hide' : 'invalid'}
// 							/>
// 						</label>
// 						<input
// 							type="text"
// 							id="username"
// 							ref={userRef}
// 							autoComplete="off"
// 							onChange={(e) => setUser(e.target.value)}
// 							value={user}
// 							required
// 							aria-invalid={validName ? 'false' : 'true'}
// 							aria-describedby="uidnote"
// 							onFocus={() => setUserFocus(true)}
// 							onBlur={() => setUserFocus(false)}
// 						/>
// 						<p
// 							id="uidnote"
// 							className={
// 								userFocus && user && !validName ? 'instructions' : 'offscreen'
// 							}
// 						>
// 							<FontAwesomeIcon icon={faInfoCircle} />
// 							4 to 24 characters.
// 							<br />
// 							Must begin with a letter.
// 							<br />
// 							Letters, numbers, underscores, hyphens allowed.
// 						</p>

// 						<label htmlFor="password">
// 							Password:
// 							<FontAwesomeIcon
// 								icon={faCheck}
// 								className={validPwd ? 'valid' : 'hide'}
// 							/>
// 							<FontAwesomeIcon
// 								icon={faTimes}
// 								className={validPwd || !pwd ? 'hide' : 'invalid'}
// 							/>
// 						</label>
// 						<input
// 							type="password"
// 							id="password"
// 							onChange={(e) => setPwd(e.target.value)}
// 							value={pwd}
// 							required
// 							aria-invalid={validPwd ? 'false' : 'true'}
// 							aria-describedby="pwdnote"
// 							onFocus={() => setPwdFocus(true)}
// 							onBlur={() => setPwdFocus(false)}
// 						/>
// 						<p
// 							id="pwdnote"
// 							className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
// 						>
// 							<FontAwesomeIcon icon={faInfoCircle} />
// 							8 to 24 characters.
// 							<br />
// 							Must include uppercase and lowercase letters, a number and a
// 							special character.
// 							<br />
// 							Allowed special characters:{' '}
// 							<span aria-label="exclamation mark">!</span>{' '}
// 							<span aria-label="at symbol">@</span>{' '}
// 							<span aria-label="hashtag">#</span>{' '}
// 							<span aria-label="dollar sign">$</span>{' '}
// 							<span aria-label="percent">%</span>
// 						</p>

// 						<label htmlFor="confirm_pwd">
// 							Confirm Password:
// 							<FontAwesomeIcon
// 								icon={faCheck}
// 								className={validMatch && matchPwd ? 'valid' : 'hide'}
// 							/>
// 							<FontAwesomeIcon
// 								icon={faTimes}
// 								className={validMatch || !matchPwd ? 'hide' : 'invalid'}
// 							/>
// 						</label>
// 						<input
// 							type="password"
// 							id="confirm_pwd"
// 							onChange={(e) => setMatchPwd(e.target.value)}
// 							value={matchPwd}
// 							required
// 							aria-invalid={validMatch ? 'false' : 'true'}
// 							aria-describedby="confirmnote"
// 							onFocus={() => setMatchFocus(true)}
// 							onBlur={() => setMatchFocus(false)}
// 						/>
// 						<p
// 							id="confirmnote"
// 							className={
// 								matchFocus && !validMatch ? 'instructions' : 'offscreen'
// 							}
// 						>
// 							<FontAwesomeIcon icon={faInfoCircle} />
// 							Must match the first password input field.
// 						</p>

// 						<button
// 							disabled={!validName || !validPwd || !validMatch ? true : false}
// 						>
// 							Sign Up
// 						</button>
// 					</form>
// 					<p>
// 						Already registered?
// 						<br />
// 						<span className="line">
// 							<a href="/login">Sign In</a>
// 						</span>
// 					</p>
// 				</section>
// 			)}
// 		</>
// 	);
// };

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username,
					password,
				}),
				// body: JSON.stringify(data)
			});
			const data = await response.json();
			if (response.status === 201) {
				alert('Registered successfully')
				navigate('/login');
			} else {
				alert('error found')
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1 style={{ color: '#ccc' }}>Register</h1>
				<input
					type="text"
					placeholder="Enter your username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Enter your password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</>
	)
};

export default Register;
