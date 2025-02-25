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
			await uploadFile(file);
			onUpload("File uploaded successfully!");
		} catch (error) {
			console.error("Upload failed:", error);
			onUpload("File upload failed.");
		}
	};

	return (
		<div className="flex flex-col items-center gap-3 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
			<label className="cursor-pointer bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
				Choose File
				<input
					type="file"
					onChange={handleFileChange}
					className="hidden"
				/>
			</label>

			{file && (
				<p className="text-gray-700 text-sm font-medium bg-gray-100 px-3 py-2 rounded-lg shadow-sm">
					📄 {file.name}
				</p>
			)}

			<button
				onClick={handleUpload}
				disabled={!file}
				className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition disabled:opacity-50"
			>
				Upload
			</button>
		</div>
	);
};

export default FileUpload;
