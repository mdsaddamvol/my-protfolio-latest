import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark'>
			<head>
				<title>MD Saddam Hosen | Full-Stack Web Developer</title>
				<meta
					name='description'
					content='Portfolio of MD Saddam Hosen, a full-stack web developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB.'
				/>
				<meta
					property='og:title'
					content='MD Saddam Hosen | Full-Stack Web Developer'
				/>
				<meta
					property='og:description'
					content='Portfolio of MD Saddam Hosen, a full-stack web developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB.'
				/>
				<meta property='og:image' content='/og-image.png' />
				<meta property='og:url' content='https://your-site.vercel.app ' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body>{children}</body>
		</html>
	);
}
