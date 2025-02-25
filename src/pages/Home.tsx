import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import Chat from "../components/Chat";

const Home: React.FC = () => {
	const [message, setMessage] = useState<string>("");

	return (
		<div>
			<h1>RAG Chat System</h1>
			<FileUpload onUpload={setMessage} />
			{message && <p>{message}</p>}
			<Chat />
		</div>
	);
};

export default Home;
