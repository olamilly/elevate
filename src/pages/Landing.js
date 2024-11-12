import { Box } from "@chakra-ui/react";
import { header, main } from "framer-motion/client";
import { Link } from "react-router-dom";
function Landing() {
	return (
		<div className="landing">
			<Box
				as={header}
				width="100%"
				p="1rem"
				display="flex"
				alignItems="center"
				justifyContent={{ base: "center", sm: "space-between" }}
			>
				<div className="brand d-flex align-items-center">
					<img src="/elevate-logo-white.svg" alt="Brand Logo" />
					<span className="ms-2">Elevate</span>
				</div>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexGrow={1}
					gap="3rem"
					className="nav-links"
				>
					<span className="text-decoration-underline">Home</span>
					<span>Members</span>
					<span>Benefits</span>
				</Box>

				<div className="header-cta d-flex align-items-center">
					<p
						className="mb-0 me-2"
						data-bs-toggle="modal"
						data-bs-target="#login"
					>
						Log in
					</p>
					{/* <Button size="sm" data-bs-toggle="modal" data-bs-target="#login">
						Sign Up
					</Button> */}
					<div
						className="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#login"
					>
						Sign Up
					</div>
				</div>
			</Box>
			<Box as={main} height="100%" width="100%" display="flex" className="pb-0">
				<div className="hero-text slide-up">
					<h1>Your Personal Health Companion</h1>
					<p className="mb-4">
						Elevate is your feature-rich online health companion designed to
						help you track your health and nutrition goals, monitor your vitals
						and be the best that you can be.{" "}
					</p>
					{/* <Button data-bs-toggle="modal" data-bs-target="#login">
						Get Started
					</Button> */}
					<div
						className="btn btn-primary "
						data-bs-toggle="modal"
						data-bs-target="#login"
					>
						<div className="d-flex justify-content-center align-items-center gap-1">
							<span>Get Started</span>
							<i class="bx bx-chevrons-right"></i>
						</div>
					</div>
				</div>
				<div className="hero-img-container">
					<img
						src="/landing-illustration.svg"
						className="slide-up"
						alt="A Fit Man"
					/>
				</div>
			</Box>

			<div class="login">
				<div
					class="modal fade"
					id="login"
					role="dialog"
					aria-labelledby="loginTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content bg-dark">
							<div class="modal-body">
								<div className="my-3 d-flex justify-content-center">
									<img src="/elevate-logo-white.svg" alt="Brand Logo" />
								</div>
								<ul
									class="nav nav-fill nav-pills mb-3"
									id="pills-tab"
									role="tablist"
								>
									<li class="nav-item">
										<a
											class="nav-link active"
											id="pills-home-tab"
											data-bs-toggle="pill"
											href="#pills-login"
											role="tab"
											aria-controls="pills-login"
											aria-selected="true"
										>
											Login
										</a>
									</li>
									<li class="nav-item">
										<a
											class="nav-link"
											id="pills-register-tab"
											data-bs-toggle="pill"
											href="#pills-register"
											role="tab"
											aria-controls="pills-register"
											aria-selected="false"
										>
											Signup
										</a>
									</li>
								</ul>

								<div class="tab-content" id="pills-tabContent">
									<div
										class="tab-pane fade show active"
										id="pills-login"
										role="tabpanel"
										aria-labelledby="pills-login-tab"
									>
										<h5 class="text-center">Login</h5>
										<div class="form-group my-2">
											<label htmlFor="exampleInputEmail1">Email address</label>
											<input
												type="email"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Your email address"
											/>
											<small class="form-danger">
												We'll never share your email with anyone else.
											</small>
										</div>
										<div class="form-group my-2">
											<label htmlFor="exampleInputPassword1">Password</label>
											<div className="d-flex align-items-center">
												<input
													type="password"
													class="form-control"
													id="password"
													placeholder="Password"
												/>
												<i class="bx bx-show"></i>
											</div>
										</div>

										<div class="form-group my-3 d-flex justify-content-center">
											<Link to="/dashboard">
												<button
													data-bs-dismiss="modal"
													className="btn btn-primary"
												>
													Login
												</button>
											</Link>
										</div>
									</div>
									<div
										class="tab-pane fade"
										id="pills-register"
										role="tabpanel"
										aria-labelledby="pills-register-tab"
									>
										<h5 class="text-center">Create New Account</h5>

										<div class="form-group my-2">
											<label htmlFor="name">Full Name</label>
											<input
												type="text"
												class="form-control"
												id="name"
												placeholder="Your full name"
											/>
										</div>

										<div class="form-group my-2">
											<label htmlFor="email">Email address</label>
											<input
												type="email"
												class="form-control"
												id="email"
												aria-describedby="emailHelp"
												placeholder="Your email address"
											/>
										</div>
										<div class="form-group my-2">
											<label htmlFor="password">Password</label>
											<div className="d-flex align-items-center">
												<input
													type="password"
													class="form-control"
													id="password"
													placeholder="Password"
												/>
												<i class="bx bx-show"></i>
											</div>
										</div>

										<div class="form-group my-3 d-flex justify-content-center">
											<Link to="/dashboard">
												<button
													data-bs-dismiss="modal"
													className="btn btn-primary"
												>
													Sign Up
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
