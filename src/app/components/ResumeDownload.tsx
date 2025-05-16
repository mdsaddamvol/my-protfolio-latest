"use client";

import { pdf } from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDocument";

export default function ResumeDownload() {
	const handleDownload = async () => {
		const blob = await pdf(<ResumeDocument />).toBlob();
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "MD_Saddam_Hosen_Resume.pdf";
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<button
			onClick={handleDownload}
			className='border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition transform hover:scale-105'
		>
			📄 Download Resume
		</button>
	);
}
