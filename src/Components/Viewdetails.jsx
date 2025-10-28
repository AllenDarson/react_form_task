import React from 'react'

function Viewdetails() {
  return (
    <div>
        <Container className="mt-5">
      <Card style={{ padding: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
        <h3 className="text-center mb-3">Submitted Details</h3>
        {submitted ? (
          <div>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Department:</strong> {submitted.department}</p>
            <p><strong>Date of Birth:</strong> {submitted.date}</p>
            <p><strong>Password:</strong> {submitted.password}</p>
            <p><strong>Address:</strong> {submitted.address}</p>
            <p><strong>State:</strong> {submitted.state}</p>
            <p><strong>City:</strong> {submitted.city}</p>
            <p><strong>Pincode:</strong> {submitted.pincode}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
       
      </Card>
    </Container>
    </div>
  )
}

export default Viewdetails