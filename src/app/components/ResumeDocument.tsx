import React from "react";
import {
	Document,
	Page,
	View,
	Text,
	StyleSheet,
	Link,
	Image,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#ffffff",
		color: "#000000",
		padding: 30,
		fontFamily: "Helvetica",
		lineHeight: 1.5,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#e5e5e5",
		paddingBottom: 20,
	},
	profilePic: {
		width: 70,
		height: 70,
		borderRadius: 35,
		objectFit: "cover",
		borderWidth: 2,
		borderColor: "#00ffcc", // Your brand accent color
		marginRight: 20,
	},
	headerText: {
		fontSize: 26,
		fontWeight: "bold",
		marginBottom: 6,
		color: "#000000",
	},
	subheading: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#00ffcc", // Accent color for subheadings
		marginBottom: 8,
	},
	section: {
		marginBottom: 18,
	},
	text: {
		fontSize: 12,
		color: "#333333",
		marginBottom: 6,
	},
	link: {
		color: "#007BFF",
		textDecoration: "underline",
	},
	skillCategory: {
		fontWeight: "bold",
		color: "#000000",
		marginBottom: 4,
	},
	skillList: {
		fontSize: 11,
		color: "#555555",
		marginBottom: 6,
	},
	listItem: {
		marginLeft: 10,
		marginBottom: 4,
	},
});

export const ResumeDocument = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			{/* Header with Image */}
			<View style={styles.header}>
				<Image style={styles.profilePic} src='/profilepic.jpg' />
				<View>
					<Text style={styles.headerText}>MD SADDAM HOSEN</Text>
					<Text style={styles.subheading}>Full-Stack Web Developer</Text>
				</View>
			</View>

			{/* Contact Info */}
			<View style={styles.section}>
				<Text style={styles.subheading}>CONTACT</Text>
				<Text style={styles.text}>
					Email:{" "}
					<Link src='mailto:mdsaddamvoltas@gmail.com' style={styles.link}>
						mdsaddamvoltas@gmail.com
					</Link>
				</Text>
				<Text style={styles.text}>
					Phone:{" "}
					<Link src='tel:+8801402866937' style={styles.link}>
						+880 1402866937
					</Link>
				</Text>
				<Text style={styles.text}>Location: Tangail, Bangladesh</Text>
				<Text style={styles.text}>
					GitHub:{" "}
					<Link src='https://github.com/mdsaddamvol ' style={styles.link}>
						github.com/mdsaddamvol
					</Link>
				</Text>
				<Text style={styles.text}>
					LinkedIn:{" "}
					<Link
						src='https://linkedin.com/in/md-saddam-hosen-ssrgeek/ '
						style={styles.link}
					>
						linkedin.com/in/md-saddam-hosen-ssrgeek/
					</Link>
				</Text>
			</View>

			{/* Languages & Interests */}
			<View style={styles.section}>
				<Text style={styles.subheading}>LANGUAGES</Text>
				<Text style={styles.text}>Bangla: Native or Bilingual Proficiency</Text>
				<Text style={styles.text}>English: Full Professional Proficiency</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.subheading}>INTERESTS</Text>
				<Text style={styles.text}>Machine Learning · Web3 · Flutter</Text>
			</View>

			{/* About Me */}
			<View style={styles.section}>
				<Text style={styles.subheading}>ABOUT ME</Text>
				<Text style={styles.text}>
					I am MD SADDAM HOSEN, a full-stack web developer. I build fast and
					responsive websites. I am an expert in making eCommerce, blog, social,
					business, booking, personal, and LMS websites. I use React.js for the
					front-end and Node.js with Express.js for the back-end server or REST
					API. As a database, I can use both SQL and NoSQL databases like
					Postgres, MongoDB, Firebase, Redis, etc. I use Next.js(13+) to achieve
					the best SEO for any React app that depends on web searches for
					traffic. I am good at learning new things and solving bugs.
				</Text>
			</View>

			{/* Skills */}
			<View style={styles.section}>
				<Text style={styles.subheading}>SKILLS</Text>
				<Text style={styles.skillCategory}>Front-End Development:</Text>
				<Text style={styles.skillList}>
					JavaScript, React.js, Redux, Zustand, Next.js, TypeScript, Tailwind,
					Styled Components, Axios, Apollo Client, GraphQL
				</Text>

				<Text style={styles.skillCategory}>Back-End Development:</Text>
				<Text style={styles.skillList}>Express.js, Node.js</Text>

				<Text style={styles.skillCategory}>Databases:</Text>
				<Text style={styles.skillList}>SQL, MongoDB, Firebase</Text>

				<Text style={styles.skillCategory}>Tools & Technologies:</Text>
				<Text style={styles.skillList}>
					Docker Compose, Nginx, Bash, Git, GitHub, GitLab, Bitbucket
				</Text>
			</View>

			{/* Work Experience */}
			<View style={styles.section}>
				<Text style={styles.subheading}>WORK EXPERIENCE</Text>
				<Text style={styles.text}>
					<Text style={{ fontWeight: "bold" }}>
						Freelance Full-Stack Web Developer
					</Text>
					{"\n"}Upwork (02/2021 – Present)
				</Text>
				<Text style={styles.text}>
					• Top-rated freelancer with a 100% job success score and all 5-star
					ratings.
				</Text>
			</View>

			{/* Education */}
			<View style={styles.section}>
				<Text style={styles.subheading}>EDUCATION</Text>
				<Text style={styles.text}>
					<Text style={{ fontWeight: "bold" }}>
						Diploma in Electrical Engineering
					</Text>
					{"\n"}Madhupur Engineering College (01/2015 – 12/2018)
				</Text>
			</View>
		</Page>
	</Document>
);
