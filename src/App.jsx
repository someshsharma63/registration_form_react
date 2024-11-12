import './App.css'
import Modaldata from './Component/Modaldata';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
// import Modal from "./t&m_model.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [otherCourse, setOtherCourse] = useState("");
  const [role, setRole] = useState("");
  const [qualification, setQualification] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [localAddress, setLocalAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [isSameAddress, setIsSameAddress] = useState(false);


  const handleCheckboxChange = () => {
    setIsSameAddress(!isSameAddress);  // Toggle the checkbox state
    if (!isSameAddress) {
      setPermanentAddress(localAddress);  // Auto-fill Permanent Address
    } else {
      setPermanentAddress('');  // Clear Permanent Address if checkbox is unchecked
    }
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const termsCondition = () => {
    console.log("Opening modal...");
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("Closing modal...");
    setModalOpen(false);
  };
  const handleCourseChange = (e) => {
    const value = e.target.value;
    setSelectedCourse(value);

    if (value !== "other") {
      setOtherCourse("");
    }
  };
  return (
    <>
      <div id="wrapper">
        <Container fluid>
          <Row>
            <div
              className="success-msg alert alert-success alert-dismissible fade hide"
              role="alert"
            >
              <strong>THANKS. Your registration is successful.</strong>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <Col sm={12}>
              <form
                className="registration-form mb-3"
                method="post"
                action=""
                encType="multipart/form-data"
              >
                <Card>
                  <Card.Header>Personal Details</Card.Header>
                  <Card.Body>
                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Name
                      </Form.Label>
                      <Col sm={10}>

                        <Form.Control type="text" id="name"
                          name="name" placeholder="Enter your full name" />
                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Email
                      </Form.Label>
                      <Col sm={10}>


                        <Form.Control type="email" id="email"
                          name="email" placeholder="Enter your email address" />

                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Phone
                      </Form.Label>
                      <Col sm={10}>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          required
                        /> */}


                        <Form.Control type="email" id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          required />
                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Date of Birth
                      </Form.Label>
                      <Col sm={10}>
                        {/* <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          required
                        /> */}


                        <Form.Control type="date" id="dob"
                          name="dob" required />

                      </Col>
                    </Form.Group>
                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Gender
                      </Form.Label>




                      <Col sm={10}>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            required
                          />


                          {/* <Form.Control type="radio"    className="form-check-input"   id="male"  value="male"
               name="gender" required  /> */}



                          <Form.Label className="form-check-label">
                            Male
                          </Form.Label>


                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            required
                          />

                          <Form.Label className="form-check-label">
                            Female
                          </Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            required
                          />
                          <Form.Label className="form-check-label">
                            Others
                          </Form.Label>
                        </div>
                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Aadhaar Card
                      </Form.Label>
                      <div className="col-sm-10 row">
                        <Col sm={6}>
                          {/* <input
                            type="file"
                            className="form-control"
                            id="aadharFront"
                            name="aadharFront"
                            required
                          /> */}

                          <Form.Control type="file" className="form-control" id="aadharFront"
                            name="aadharFront" required />



                        </Col>
                        <Col sm={6}>
                          {/* <input
                            type="file"
                            className="form-control"
                            id="aadharBack"
                            name="aadharBack"
                            required
                          /> */}


                          <Form.Control type="file" className="form-control" id="aadharBack"
                            name="aadharBack" required />
                        </Col>
                      </div>
                    </Form.Group>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Header>Parent / Guardian Details</Card.Header>
                  <Card.Body>
                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Parent / Guardian / Spouse Name
                      </Form.Label>
                      <Col sm={10}>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                          placeholder="Enter your parent / guardian name"
                          required
                        /> */}


                        <Form.Control type="text" className="form-control" id="fname"
                          name="fname" placeholder="Enter your parent / guardian name" required />


                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">
                      <Form.Label className="col-sm-2 col-form-label">
                        Parent / Guardian / Spouse Phone
                      </Form.Label>
                      <Col sm={10}>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="fphone"
                          name="fphone"
                          placeholder="Enter your parent / guardian phone number"
                          required
                        /> */}



                        <Form.Control type="text" className="form-control" id="fphone"
                          name="fphone" placeholder="Enter your parent / guardian phone number" required />



                      </Col>
                    </Form.Group>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Header>Residential Details</Card.Header>
                  <Card.Body>

                    <Form.Group className="form-group row mb-3 align-items-center">

                      <Form.Label className="col-sm-2 col-form-label">
                        Local Address
                      </Form.Label>

                      <Col sm={10}>
                        {/* <textarea
                          className="form-control"
                          name="laddress"
                          id="laddress"
                          placeholder="Enter your local address (Where you stay in jaipur)"
                          value={localAddress}
                          onChange={(e) => setLocalAddress(e.target.value)}
                          required
                        ></textarea> */}



                        <Form.Control as="textarea" className="form-control"
                          name="laddress"
                          id="laddress"
                          placeholder="Enter your local address (Where you stay in jaipur)" value={localAddress}
                          onChange={(e) => setLocalAddress(e.target.value)}
                          required rows={2} />

                      </Col>
                    </Form.Group>

                    <Form.Group className="form-group row mb-3">

                      <Form.Label className="col-sm-2 col-form-label">
                        Permanent Address
                      </Form.Label>

                      <Col sm={10}>
                        {/* <textarea
                          className="form-control"
                          name="paddress"
                          id="paddress"
                          placeholder="Enter your permanent address (address of your hometown)"
                          value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          required
                        ></textarea> */}


                        <Form.Control as="textarea" className="form-control"
                          name="paddress"
                          id="paddress"
                          placeholder="Enter your permanent address (address of your hometown)" value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          required rows={2} />



                      </Col>
                    </Form.Group>


                    <Form.Group className="form-group row mb-3">
                      <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="sameAddress"
                            checked={isSameAddress}
                            onChange={handleCheckboxChange}
                          />


                          <Form.Label className="col-form-label">
                            Permanent address is the same as local address
                          </Form.Label>

                        </div>
                      </div>
                    </Form.Group>
                  </Card.Body>
                </Card>

                <Card>
                  <Card>

                    <Card.Header>Educational Details</Card.Header>
                    <Card.Body>
                      <Form.Group className="form-group row mb-3">


                        <Form.Label className="col-sm-2 col-form-label">
                          Are you a:
                        </Form.Label>
                        <Col sm={10}>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              value="student"
                              checked={role === "student"}
                              onChange={handleRoleChange}
                            />

                            <Form.Label className="col-form-label">
                              Student
                            </Form.Label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="role"
                              value="workingProfessional"
                              checked={role === "workingProfessional"}
                              onChange={handleRoleChange}
                            />

                            <Form.Label className="col-form-label">
                              Working Professional
                            </Form.Label>

                          </div>
                        </Col>
                      </Form.Group>

                      {/* Conditionally Render Inputs Based on Role Selection */}
                      { (
                        <>
                          <div className="form-group row">

                            <Form.Label className="col-sm-2 col-form-label">
                              Qualification
                            </Form.Label>


                            <div className="col-sm-10">
                              {/* <input
                                type="text"
                                className="form-control"
                                id="qualification"
                                value={qualification}
                                onChange={(e) =>
                                  setQualification(e.target.value)
                                }
                                placeholder="Enter your qualification"
                                required
                              /> */}


                              <Form.Control type="text" className="form-control" id="qualification"
                                value={qualification}
                                onChange={(e) =>
                                  setQualification(e.target.value)
                                } placeholder="Enter your qualification" required />

                            </div>
                          </div>

                          <div className="form-group row">

                            <Form.Label className="col-sm-2 col-form-label">
                              Completion Year
                            </Form.Label>

                            <div className="col-sm-10">
                              {/* <input
                                type="text"
                                className="form-control"
                                id="completionYear"
                                value={completionYear}
                                onChange={(e) =>
                                  setCompletionYear(e.target.value)
                                }
                                placeholder="Enter your completion year"
                                required
                              /> */}



                              <Form.Control type="text" className="form-control" id="completionYear"
                                value={completionYear}
                                onChange={(e) =>
                                  setCompletionYear(e.target.value)
                                } placeholder="Enter your completion year" required />
                            </div>
                          </div>
                        </>
                      )}

                      {role === "workingProfessional" && (
                        <>
                          <div className="form-group row">

                            <Form.Label className="col-sm-2 col-form-label">
                              Designation
                            </Form.Label>


                            <div className="col-sm-10">
                              {/* <input
                                type="text"
                                className="form-control"
                                id="designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                placeholder="Enter your designation"
                                required
                              /> */}


                              <Form.Control type="text" className="form-control" id="designation"
                                value={designation}
                                onChange={(e) =>
                                  setDesignation(e.target.value)
                                } placeholder="Enter your designation" required />


                            </div>
                          </div>

                          <div className="form-group row">

                            <Form.Label className="col-sm-2 col-form-label">
                              Company
                            </Form.Label>

                            <Col sm={10}>
                              {/* <input
                                type="text"
                                className="form-control"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Enter your company name"
                                required
                              /> */}


                              <Form.Control type="text" className="form-control" id="company"
                                value={company}
                                onChange={(e) =>
                                  setCompany(e.target.value)
                                } placeholder="Enter your company name" required />



                            </Col>
                          </div>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Card>

                <Card>
                  <Card.Header>Course Details</Card.Header>
                  <Card.Body>
                    <Form.Group className="form-group row mb-3">

                      <Form.Label className="col-sm-2 col-form-label">
                        Course
                      </Form.Label>

                      <Col sm={10}>
                        <select
                          className="form-control"
                          name="course"
                          id="course"
                          value={selectedCourse}
                          onChange={handleCourseChange}
                          required
                        >
                          <option value="">Select a course</option>
                          <option value="advanced java">Advanced Java</option>
                          <option value="android">Android</option>
                          <option value="computer basics">
                            Computer Basics
                          </option>
                          <option value="core java">Core Java</option>
                          <option value="digital marketing">
                            Digital Marketing
                          </option>
                          <option value="full stack">
                            Full Stack Development
                          </option>
                          <option value="graphic design">Graphic Design</option>
                          <option value="node js">Node JS</option>
                          <option value="photoshop">Photoshop</option>
                          <option value="php">PHP</option>
                          <option value="python">Python</option>
                          <option value="react js">React JS</option>
                          <option value="web design">Web Design</option>
                          <option value="other">Other Course</option>
                        </select>
                      </Col>
                    </Form.Group>
                    {selectedCourse === "other" && (
                      <div className="form-group row">

                        <Form.Label className="col-sm-2 col-form-label">
                          Enter your course
                        </Form.Label>


                        <Col sm={10}>
                          {/* <input
                            type="text"
                            className="form-control"
                            id="otherCourse"
                            name="otherCourse"
                            placeholder="Enter the course name"
                            value={otherCourse}
                            onChange={(e) => setOtherCourse(e.target.value)}
                            required
                          /> */}



                          <Form.Control type="text" className="form-control" id="otherCourse" name='otherCourse'
                            value={otherCourse}
                            onChange={(e) =>
                              setOtherCourse(e.target.value)
                            } placeholder="Enter the course name" required />

                        </Col>
                      </div>
                    )}
                    <Form.Group className="form-group row mb-3">

                      <Form.Label className="col-sm-2 col-form-label">
                        How did you come to know about us?
                      </Form.Label>



                      <Col sm={10}>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="google"
                            value="Google"
                            required
                          />

{/* 
<Form.Control type="radio"  className="form-check-input"   name="referral"  id="google"  value="Google"  required /> */}





                          <Form.Label className="form-label">
                            Google
                          </Form.Label>



                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="facebook"
                            value="Facebook"
                            required
                          />



{/* <Form.Control type="radio"  className="form-check-input"   name="referral"  id="facebook"  value="Facebook"  required /> */}

                          <Form.Label className="form-label">
                            Facebook
                          </Form.Label>


                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="instagram"
                            value="Instagram"
                            required
                          />

                          <Form.Label className="form-label">
                            Instagram
                          </Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="collegeTPO"
                            value="College TPO"
                            required
                          />

                          <Form.Label className="form-check-label">
                            College TPO
                          </Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="referral"
                            id="friend"
                            value="Friend"
                            required
                          />


                          <Form.Label className="form-check-label">
                            Friend
                          </Form.Label>
                        </div>
                      </Col>
                    </Form.Group>

                    <Col sm={12}>
                      <div className="form-check form-check-inline">
                        <Form.Label className="switch">
                          <input
                            type="checkbox"
                            id="terms"
                            value="terms"
                            required
                            onClick={termsCondition}
                          />
                          <span className="slider round"></span>
                        </Form.Label>



                        {/* <label
                          className="form-check-label pl-2 text-muted"
                          htmlFor="terms"
                        >
                          By clicking submit, you agree to our {""}{" "}
                          <span
                            onClick={termsCondition}
                            style={{ color: "blue", cursor: "pointer" }}
                          >
                            Terms & Conditions
                          </span>
                        </label> */}



                        <Form.Label className="form-check-label pl-2 text-muted">
                          By clicking submit, you agree to our {""}{" "}
                          <span
                            onClick={termsCondition}
                            style={{ color: "blue", cursor: "pointer" }}
                          >
                            Terms & Conditions
                          </span>
                        </Form.Label>

                        {/* <Form.Label className="col-sm-2 col-form-label">
                    Phone
                  </Form.Label> */}
                      </div>
                    </Col>
                    <Col sm={12}>
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </Col>
                  </Card.Body>
                </Card>
              </form>

              {/* {modalOpen && <Modal show={modalOpen} onClose={closeModal} />} */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;