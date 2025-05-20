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
			className='px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent hover:text-dark transition duration-400 ease-in-out-custom'
		>
			📄 Download Resume
		</button>
	);
}
