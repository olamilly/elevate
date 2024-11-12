import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	Label,
} from "recharts";

const mockWeekData = [
	{
		day: "Mon",
		steps: 8420,
		water: 2.1,
		calories: 2100,
		weight: 70.5,
		sleep: 7.2,
		heartRate: 72,
	},
	{
		day: "Tue",
		steps: 10200,
		water: 2.4,
		calories: 2300,
		weight: 70.3,
		sleep: 6.8,
		heartRate: 75,
	},
	{
		day: "Wed",
		steps: 7300,
		water: 1.8,
		calories: 1950,
		weight: 70.4,
		sleep: 7.5,
		heartRate: 71,
	},
	{
		day: "Thu",
		steps: 9100,
		water: 2.2,
		calories: 2200,
		weight: 70.2,
		sleep: 7.8,
		heartRate: 73,
	},
	{
		day: "Fri",
		steps: 11200,
		water: 2.5,
		calories: 2400,
		weight: 70.1,
		sleep: 7.1,
		heartRate: 74,
	},
	{
		day: "Sat",
		steps: 6800,
		water: 1.9,
		calories: 2050,
		weight: 70.0,
		sleep: 8.2,
		heartRate: 70,
	},
	{
		day: "Sun",
		steps: 8900,
		water: 2.3,
		calories: 2150,
		weight: 63.9,
		sleep: 7.0,
		heartRate: 72,
	},
];

const goals = {
	steps: 10000,
	water: 3.0,
	calories: 2500,
	weight: 70.0,
	sleep: 8.0,
	heartRate: 80,
};

const colors = {
	steps: { ring: "#22c55e", bg: "#dcfce7" },
	water: { ring: "#3b82f6", bg: "#dbeafe" },
	calories: { ring: "#f97316", bg: "#ffedd5" },
	weight: { ring: "#a855f7", bg: "#f3e8ff" },
	sleep: { ring: "#6366f1", bg: "#e0e7ff" },
	heartRate: { ring: "#ef4444", bg: "#fee2e2" },
};

const CircularProgress = ({ value, goal, color }) => {
	const percentage = Math.min(Math.round((value / goal) * 100), 100);
	const size = 120;
	const strokeWidth = 13;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<div className="position-relative d-inline-flex">
			<svg className="rotate-270" width={size} height={size}>
				<circle
					className="transition"
					stroke={color.bg}
					fill="none"
					strokeWidth={strokeWidth}
					r={radius}
					cx={size / 2}
					cy={size / 2}
				/>
				<circle
					className="transition"
					stroke={color.ring}
					fill="none"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					r={radius}
					cx={size / 2}
					cy={size / 2}
					style={{
						strokeDasharray: circumference,
						strokeDashoffset: strokeDashoffset,
					}}
				/>
			</svg>
			<span className="position-absolute top-50 start-50 translate-middle small fw-medium">
				{percentage}%
			</span>
		</div>
	);
};

const MetricCard = ({ title, value, unit, icon, metric, goal }) => {
	return (
		<div className="card shadow-sm h-100">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<div className="w-100">
						<div className="d-flex align-items-center gap-2">
							<i
								class={icon}
								style={{ fontSize: "30px", color: colors[metric].ring }}
							></i>
							{/* <Icon style={{ color: colors[metric].ring }} className="me-2" size={20} /> */}
							<p className="small text-secondary mb-0">{title}</p>
						</div>
						<div className="d-flex justify-content-center">
							<CircularProgress
								value={value}
								goal={goal}
								color={colors[metric]}
							/>
						</div>

						<div className="d-flex justify-content-between align-items-center">
							<h3 className="mt-2 fw-bold">
								{value.toLocaleString("en-US")}
								<span className="ms-1 small text-secondary">{unit}</span>
							</h3>
							<p className="small text-secondary mt-1 mb-0">
								Goal: {goal.toLocaleString("en-US")}
								{unit}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const HealthDashboard = () => {
	const [selectedMetric, setSelectedMetric] = useState("steps");

	const getAxisLabel = (metric) => {
		const labels = {
			steps: "Steps Count",
			water: "Liters",
			calories: "Calories (kcal)",
			weight: "Weight (kg)",
			sleep: "Hours",
			heartRate: "BPM",
		};
		return labels[metric];
	};

	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			const value = payload[0].value;
			let displayValue = value;

			if (selectedMetric === "steps") {
				displayValue = value.toLocaleString();
			} else if (["water", "weight", "sleep"].includes(selectedMetric)) {
				displayValue = value.toFixed(1);
			}

			return (
				<div className="bg-white p-2 border rounded shadow-sm">
					<p className="small text-secondary mb-0">
						{`${label}: ${displayValue} ${
							selectedMetric === "steps" ? "" : getAxisLabel(selectedMetric)
						}`}
					</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="container-fluid py-4">
			<div className="row g-4 mb-4">
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Daily Steps"
						value={mockWeekData[6].steps}
						unit="steps"
						icon="bx bx-walk me-2"
						metric="steps"
						goal={goals.steps}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Water Intake"
						value={mockWeekData[6].water}
						unit="L"
						icon="bx bxs-droplet me-2"
						metric="water"
						goal={goals.water}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Calories"
						value={mockWeekData[6].calories}
						unit="kcal"
						icon="bx bx-baguette"
						metric="calories"
						goal={goals.calories}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Weight"
						value={mockWeekData[6].weight}
						unit="kg"
						icon="bx bx-body"
						metric="weight"
						goal={goals.weight}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Sleep"
						value={mockWeekData[6].sleep}
						unit="hrs"
						icon="bx bx-alarm-snooze"
						metric="sleep"
						goal={goals.sleep}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-4">
					<MetricCard
						title="Heart Rate"
						value={mockWeekData[6].heartRate}
						unit="bpm"
						icon="bx bxs-heart"
						metric="heartRate"
						goal={goals.heartRate}
					/>
				</div>
			</div>

			<div className="card">
				<div className="card-body">
					<h2 className="h5 text-center fw-semibold mb-4">Weekly Data</h2>
					<div style={{ height: "300px" }}>
						<ResponsiveContainer width="100%" height="100%">
							<BarChart
								data={mockWeekData}
								margin={{ top: 20, right: 30, bottom: 40, left: 40 }}
							>
								<CartesianGrid strokeDasharray="3 3" opacity={0.1} />
								<XAxis dataKey="day" tick={{ fill: "#666" }}>
									<Label
										value="Day of Week"
										position="bottom"
										offset={20}
										style={{ fill: "#666" }}
									/>
								</XAxis>
								<YAxis tick={{ fill: "#666" }}>
									<Label
										value={getAxisLabel(selectedMetric)}
										position="left"
										angle={-90}
										offset={-20}
										style={{ fill: "#666" }}
									/>
								</YAxis>
								<Tooltip content={<CustomTooltip />} />
								<Bar
									dataKey={selectedMetric}
									fill={colors[selectedMetric].ring}
									radius={[4, 4, 0, 0]}
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
					<div className="mt-4 d-flex justify-content-center flex-wrap gap-2">
						{Object.keys(goals).map((metric) => (
							<button
								key={metric}
								onClick={() => setSelectedMetric(metric)}
								className={`btn btn-sm ${
									selectedMetric === metric ? "active" : ""
								}`}
								style={{
									backgroundColor:
										selectedMetric === metric ? colors[metric].bg : "#f8f9fa",
									color:
										selectedMetric === metric ? colors[metric].ring : "#6c757d",
									border: "none",
								}}
							>
								{metric.charAt(0).toUpperCase() + metric.slice(1)}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthDashboard;
