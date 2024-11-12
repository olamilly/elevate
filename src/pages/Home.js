import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HealthDashboard from "./Dashboard";
function Home() {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDateTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="home">
			<div className="w-100 d-flex justify-content-between align-items-center p-3">
				<Link to="/" className="brand d-flex align-items-center">
					<img src="/elevate-logo-white.svg" alt="Brand Logo" />
					<span className="ms-2">Elevate</span>
				</Link>

				<div className="user d-flex justify-content-center gap-3 align-items-center">
					<p className="mb-0">John Doe</p>
					<img src="/Esther.svg" alt="User" />
				</div>
			</div>
			<div className="d-flex align-items-center main-header">
				<h1 className="text-center">Welcome Back, John</h1>
				<p>
					{dateTime.toLocaleDateString("en-US", {
						weekday: "long",
						month: "long",
						day: "numeric",
						year: "numeric",
					})}
				</p>
			</div>
			<section>
				<h1>Health Overview</h1>
				<p>Today's Health Statistics</p>
				<HealthDashboard />
			</section>
		</div>
	);
}

export default Home;
