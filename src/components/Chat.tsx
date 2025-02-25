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

	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Ask a question..."
			/>
			<button onClick={handleSend} disabled={!query}>
				Send
			</button>
			<p>
				<strong>Response:</strong> {response}
			</p>
		</div>
	);
};

export default Chat;
