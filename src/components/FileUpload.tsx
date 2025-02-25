import React, { useState } from "react";
import { uploadFile } from "../api/api";

interface FileUploadProps {
	onUpload: (message: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = async () => {
		if (!file) return;
		try {
			const message = await uploadFile(file);
			onUpload(message);
		} catch (error) {
			console.error("Upload failed:", error);
			onUpload("File upload failed.");
		}
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUpload} disabled={!file}>
				Upload
			</button>
		</div>
	);
};

export default FileUpload;
