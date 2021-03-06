import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Menu from "../containers/Menu";
import Content from "./Content";

function App(props) {
	useEffect(() => {
		const { setBooks } = props;
		axios.get("react-shop/books.json").then(({ data }) => {
			setBooks(data);
		});
	}, []);

	return (
		<div className="page">
			<Menu />
			<Content {...props} />
		</div>
	);
}

export default App;
