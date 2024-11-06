import './App.css'

function App() {

	function termsCondition()
	{
		alert("Open Terms & Conditions and click on I Agree.")
	}
	function handleChange()
	{
	}
	return (
		<>
			<div id="wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="success-msg alert alert-success alert-dismissible fade hide" role="alert">
					<strong>THANKS. Your registration is successful.</strong>
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<div className="col-sm-12">
					<form className="registration-form mb-3" method="post" action="" encType="multipart/form-data">

					
						<div className="card">
							<div className="card-header">Personal Details</div>
							<div className="card-body">

								<div className="form-group row">
									<label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" autoFocus required/>
										<small className="form-text text-danger" id="name-error"></small>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
									<div className="col-sm-10">
										<input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" required/>
										<small className="form-text text-danger" id="email-error"></small>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required/>
										<small className="form-text text-danger" id="phone-error"></small>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
									<div className="col-sm-10">
										<input type="date" className="form-control" id="dob" name="dob" placeholder="Enter your Date of Birth" required/>
										<small className="form-text text-danger" id="dob-error"></small>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
									<div className="col-sm-10">
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="male">Male
												<input className="form-check-input" type="radio" name="gender" id="male" value="male" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="female">Female
												<input className="form-check-input" type="radio" name="gender" id="female" value="female" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">

											<label className="form-check-label mb-small" htmlFor="other">Other
												<input className="form-check-input" type="radio" name="gender" id="other" value="other" required/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
									<small className="form-text text-danger" id="gender-error"></small>
								</div>

								<div className="form-group row">
									<label htmlFor="" className="col-sm-2 col-form-label">Aadhaar Card</label>
									<div className="col-sm-10 row">
										<div className="col-sm-6">
											<div className="custom-file">
												<input type="file" className="custom-file-input" id="aadharFront" name="aadharFront" required/>
												<label className="custom-file-label" htmlFor="aadharFront">Aadhaar Card Front</label>
											</div>
										</div>

										<div className="col-sm-6">
											<div className="custom-file">
												<input type="file" className="custom-file-input" id="aadharBack" name="aadharBack" required/>
												<label className="custom-file-label" htmlFor="aadharBack">Aadhaar Card Back</label>
											</div>
										</div>
										<small className="form-text text-muted">Upload a .jpeg/.jpg/.png file of size not exceeding 1 MB.</small>
										<small className="form-text text-danger" id="aadhar-error"></small>
									</div>
								</div>

							</div>
						</div>



						<div className="card">
							<div className="card-header">Parent / Guardian Details</div>
							<div className="card-body">

								<div className="form-group row">
									<label htmlFor="fname" className="col-sm-2 col-form-label">Parent / Guardian / Spouse Name</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="fname" name="fname" placeholder="Enter your parent / guardian / spouse name" required/>
										<small className="form-text text-danger" id="fname-error"></small>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="fphone" className="col-sm-2 col-form-label">Parent / Guardian / Spouse Phone</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="fphone" name="fphone" placeholder="Enter your parent / guardian / spouse phone number" required/>
										<small className="form-text text-danger" id="fphone-error"></small>
									</div>
								</div>

							</div> 
						</div> 


						

						<div className="card">
							<div className="card-header">Residential Details</div>
							<div className="card-body">

								<div className="form-group row">
									<label htmlFor="laddress" className="col-sm-2 col-form-label">Local Address</label>
									<div className="col-sm-10">
										<textarea className="form-control" name="laddress" id="laddress" placeholder="Enter your local address (where you stay in Jaipur)" required></textarea>
										<small className="form-text text-danger" id="address-error"></small>
									</div>
								</div>

								<div className="form-group row">
									<div className="offset-sm-2 col-sm-10">
										<div className="form-check form-check-inline">
											<label className="switch">
												<input type="checkbox" id="same" value="same"/>
												<span className="slider round"></span>
											</label>
											<label className="form-check-label pr-2 text-muted" htmlFor="same">Same as Permanent Address</label>
											<input className="form-check-input" type="checkbox" id="same" value="same"/>
											    <span className="checkmark"></span>

										</div>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="paddress" className="col-sm-2 col-form-label">Permanent Address</label>
									<div className="col-sm-10">
										<textarea className="form-control" name="paddress" id="paddress" placeholder="Enter your permanent address (address of your hometown)" required></textarea>
										<small className="form-text text-danger" id="paddress-error"></small>
									</div>
								</div>

							</div> 
						</div> 


					

						<div className="card">
							<div className="card-header">Educational Details</div>
							<div className="card-body">

								<div className="form-group row">
									<label htmlFor="areYoua" className="col-sm-2 col-form-label">Are You a?</label>
									<div className="col-sm-10">
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="student">Student
												<input className="form-check-input" type="radio" name="areyoua" id="student" value="student" required checked/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="working">Working Professional
												<input className="form-check-input" type="radio" name="areyoua" id="working" value="working" required/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
								</div>
								<div className="areyoua-div">
									<div className="student-div">
										<div className="form-group row">
											<label htmlFor="qualification" className="col-sm-2 col-form-label">Last Attained Qualification</label>
											<div className="col-sm-10">
												<input className="form-control" type="text" name="qualification" id="qualification" placeholder="Your latest educational degree / diploma" required/>
											</div>
										</div>

										<div className="form-group row">
											<label htmlFor="qualificationYear" className="col-sm-2 col-form-label">Year</label>
											<div className="col-sm-10">
												<input className="form-control" type="text" name="qualificationYear" id="qualificationYear" placeholder="Completion Year" required/>
												<small className="form-text text-danger"></small>
												<small id="yearHelpBlock" className="form-text text-muted">
													Write 'Ongoing' if you are currently pursuing your degree
												</small>
											</div>
										</div>

										<div className="form-group row">
											<label htmlFor="qualificationYear" className="col-sm-2 col-form-label">College / University</label>
											<div className="col-sm-10">
												<input className="form-control" type="text" name="college" id="college" placeholder="College / University" required/>
											</div>
										</div>
									</div>
								</div>

							</div> 
						</div> 


						<div className="card">
							<div className="card-header">Course Details</div>
							<div className="card-body">

								<div className="form-group row">
									<label htmlFor="course" className="col-sm-2 col-form-label">Course</label>
									<div className="col-sm-10 course-div">
										<select className="custom-select" name="course" id="course">
											<option defaultValue="">Course you opted for</option>
<option value="advanced java">Advance Java</option>
<option value="android">Android</option>
<option value="computer basics">Computer Basics</option>
<option value="core java">Core Java</option>
<option value="digital marketing">Digital Marketing</option>
<option value="full stack">Full Stack Development</option>
<option value="graphic design">Graphic Design</option>
<option value="node js">Node JS</option>
<option value="photoshop">Photoshop</option>
<option value="php">PHP</option>
<option value="python">Python</option>
<option value="react js">React JS</option>
<option value="ui/ux">UI/UX</option>
<option value="web design">Web Design</option>
<option value="otherCourse">Other Course</option>
										</select>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="knowus" className="col-sm-2 col-form-label">How you came to know about us?</label>
									<div className="col-sm-10 source">
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="google">Google
												<input className="form-check-input" type="radio" name="referral" id="google" value="google" checked onChange={handleChange}required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="facebook">Facebook
												<input className="form-check-input" type="radio" name="referral" id="facebook" value="facebook" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="instagram">Instagram
												<input className="form-check-input" type="radio" name="referral" id="instagram" value="instagram" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="collegetpo">College TPO
												<input className="form-check-input" type="radio" name="referral" id="collegetpo" value="collegetpo" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="form-check form-check-inline">
											<label className="form-check-label mb-small" htmlFor="friend">Friend
												<input className="form-check-input" type="radio" name="referral" id="friend" value="friend" required/>
												<span className="checkmark"></span>
											</label>
										</div>
										<div className="friend-div"></div>
									</div>
								</div>



							</div> 
						</div> 

						<div className="col-sm-12">
							<div className="form-check form-check-inline">
								<label className="switch">
									<input type="checkbox" id="terms" value="terms" required disabled/>
									<span className="slider round" onClick={termsCondition}></span>
								</label>
								<label className="form-check-label pl-2 text-muted" htmlFor="terms">By clicking submit, you agree to our <a href="" data-toggle="modal" data-target="#exampleModal">Terms & Conditions</a></label>
							<input className="form-check-input" type="checkbox" id="terms" value="terms" required/>
								    <span className="checkmark"></span>

							</div>
						</div>
						<div className="col-sm-12">
							<input type="submit" name="register" className="btn btn-lg btn-primary btn-block" value="Register"/>
						</div>

					</form>
					<div className="modal" tabIndex="-1" id="exampleModal">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">Term & Conditions</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									<h5>You agree to the following:</h5>
									<ul>
										<li>You have understood the course content.</li>
										<li>You have understood the course duration.</li>
										<li>You have cleared all your doubts regarding the course, the content and the duration and have no problem with it.</li>
										<li>Fees once paid is not refundable.</li>
										<li>In case of uninformed leave, I will not be eligible for a backup.</li>
										<li>7 days or more of leaves without prior permission would result in the termination of my registration.</li>
									</ul>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-success" data-dismiss="modal" id="agreeButton">I agree</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		</>
	)
}

export default App
