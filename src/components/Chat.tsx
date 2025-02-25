import React, { useState } from "react";
import { sendQuery } from "../api/api";

const Chat: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const [response, setResponse] = useState<string>("");

	const handleSend = async () => {
		if (!query) return;
		try {
			setResponse("Thinking...");
			const answer = await sendQuery(query);
			setResponse(answer);
		} catch (error) {
			console.error("Query failed:", error);
			setResponse("Failed to get response.");
		}
	};

	// Handle Enter key press inside the input field
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault(); // Prevents new lines or unintended form submissions
			handleSend();
		}
	};

	return (
		<div className="mt-6">
			<div className="flex gap-2">
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={handleKeyDown} // Listening for Enter key
					placeholder="Ask a question..."
					className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
				<button
					onClick={handleSend}
					disabled={!query}
					className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition disabled:opacity-50"
				>
					Send
				</button>
			</div>
			<p className="mt-4 text-gray-700 font-medium bg-gray-100 p-3 rounded-lg shadow-sm">
				<strong>Response:</strong> {response}
			</p>
		</div>
	);
};

export default Chat;
