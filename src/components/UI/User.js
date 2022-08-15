import React, { useState } from "react";
import { useRef } from "react";
function User(props) {
	const refUserName = useRef(null);
	const refUserAge = useRef(null);
	// const [name, selectedName] = useState("");
	// const [age, selectedAge] = useState("");
	// const getName = (event) => {
	// 	selectedName(event.target.value);
	// };
	// const getAge = (event) => {
	// 	selectedAge(event.target.value);
	// };
	const submitHandler = (event) => {
		event.preventDefault();

		const refUserVal = refUserName.current.value;
		const refAgeVal = refUserAge.current.value;
		props.sendData(refUserVal, refAgeVal);
		// props.sendData(name, age);

		// selectedName("");
		// selectedAge("");

		refUserName.current.value = "";
		refUserAge.current.value = "";
	};
	return (
		<React.Fragment>
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label>Name : </label>
					<input type="text" className="name" ref={refUserName}></input>
				</div>
				<div>
					<label>Age : </label>
					<input type="text" className="age" ref={refUserAge}></input>
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</React.Fragment>
	);
}
export default User;
