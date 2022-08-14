import react, { useState } from "react";
function User(props) {
	const [name, selectedName] = useState("");
	const [age, selectedAge] = useState("");
	const getName = (event) => {
		selectedName(event.target.value);
		// console.log(event.target.value);
		// console.log(name);
	};
	const getAge = (event) => {
		selectedAge(event.target.value);
		// console.log(age);
		// console.log(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		// console.log(name);
		props.sendData(name, age);
		selectedName("");
		selectedAge("");
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label>Name : </label>
					<input type="text" className="name" onChange={getName}></input>
				</div>
				<div>
					<label>Age : </label>
					<input type="text" className="age" onChange={getAge}></input>
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
			</form>
		</div>
	);
}
export default User;
