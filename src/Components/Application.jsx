import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';

function Application() {
  // Step 1: Create a single state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    date:'',
    password: '',
    address: '',
    state: '',
    city: '',
    pincode: ''
  });

  // Step 2: Handle input changes
  const [submitted, setSubmitted] = useState (null)
  const handleChange = (e) => {
    setFormData({
      ...formData,              // keep previous values
      [e.target.name]: e.target.value // update only the changed field
    });
  };

  // Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log('Form Data:', formData);

    setFormData({
         name: '',
    email: '',
    department: '',
    date:'',
    password: '',
    address: '',
    state: '',
    city: '',
    pincode: ''

    })
    setSubmitted(formData)
    
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thanks for contacting me!',
      icon: 'success',
      confirmButtonColor: '#0d6efd'
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
            <div className="justify-content-center">
              <h3>Employee Details</h3>
              <div className="col-md-12">
                {/* Step 4: Attach handleSubmit to the form */}
                <form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      pattern="^[A-Za-z\s]{3,30}$"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      name="department"
                       pattern="^[A-Za-z\s]{2,30}$"
                      placeholder="Enter your department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                       
                      placeholder="Enter your department"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      pattern=".{10,200}"
                      placeholder="Type your address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                       pattern="^[A-Za-z\s]{3,30}$"
                      placeholder="Enter your state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                       pattern="^[A-Za-z\s]{3,30}$"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      name="pincode"
                       pattern="^\d{6}$"
                      placeholder="Enter your pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="btn btn-success">
                    <FaPaperPlane className="me-2" />Send Message
                  </Button>
                </form>
                {submitted && (
                    <div>
                        <h2>Submitted details</h2>
                        <p><strong>name</strong>{submitted.name}</p>
                        <p><strong>email</strong>{submitted.email}</p>
                        <p><strong>department</strong>{submitted.department}</p>
                        <p><strong>password</strong>{submitted.password}</p>
                        <p><strong>address</strong>{submitted.address}</p>
                        <p><strong>state</strong>{submitted.state}</p>
                        <p><strong>city</strong>{submitted.city}</p>
                        <p><strong>pincode</strong>{submitted.pincode}</p>
                    </div>
                )}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Application;
