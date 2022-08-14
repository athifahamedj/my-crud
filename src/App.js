import react, { useState } from "react";
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
		<div>
			<User sendData={userDetails} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
