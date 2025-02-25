import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import Chat from "../components/Chat";

const Home: React.FC = () => {
	const [message, setMessage] = useState<string>("");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
			<div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
				<h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
					🧠 RAG Chat System
				</h1>
				<FileUpload onUpload={setMessage} />
				{message && (
					<p className="text-green-600 font-medium text-center mt-4">
						{message}
					</p>
				)}
				<Chat />
			</div>
		</div>
	);
};

export default Home;
