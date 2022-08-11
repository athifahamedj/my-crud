// import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="padding-css">
				<label>Name : </label>
				<input type="text" className="form-control" />
			</div>
			<div className="padding-css">
				<label>Age : </label>
				<input type="text" className="form-control" />
			</div>
			<div className="btn-css">
				<button className="btn" type="submit">
					Submit
				</button>
			</div>
		</div>
	);
}

export default App;
