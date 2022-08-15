import React, { useState } from "react";
import User from "./components/UI/User";
import UsersList from "./components/UI/UserLists";

function App() {
	const [usersList, setUsers] = useState([]);

	const userDetails = (uName, uAge) => {
		setUsers((prevState) => {
			return [
				...prevState,
				{
					name: uName,
					age: uAge,
					id: Math.random.toString(),
				},
			];
		});
	};

	return (
		<React.Fragment>
			<User sendData={userDetails} />
			<UsersList users={usersList} />
		</React.Fragment>
	);
}

export default App;
