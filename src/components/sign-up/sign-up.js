import React, { useState } from 'react';
import { Container,Breadcrumb } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function SignUp(props) {
  const [validated, setValidated] = useState(false);
  const [formData,setFromData] = React.useState({});
  const setFieldValue = (name,value) =>{
    const updated = {
      ...formData,
      [name] : value
    }
    setFromData(updated);
    }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(form.checkValidity() === true){
        console.log("formData >>>>",formData);
    }
  };

  return (
    <Container fluid>
      <Breadcrumb style={{paddingTop:'5px',color:'#0d6efd'}}>
        <Breadcrumb.Item href="" active>
          Sign Up
        </Breadcrumb.Item>
      </Breadcrumb>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01" align="left">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={(event)=>setFieldValue('firstName',event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" align="left">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={(event)=>setFieldValue('lastName',event.target.value)}
          />
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername" align="left">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              onChange={(event)=>setFieldValue('userName',event.target.value)}
            />
           
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationEmail" align="left">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email Address"
            onChange={(event)=>setFieldValue('emailAddress',event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationRole" align="left">
            <Form.Label>User Role</Form.Label>
            <Form.Select aria-label="Default select example" required onChange={(event)=>setFieldValue('userRole',event.target.value)}>
            <option>User Role</option>
            <option value="1">Admin</option>
            <option value="2">Business User</option>
            <option value="3">User</option>
            </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationPhoneNo" align="left">
        <Form.Label>Phone Number</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>+91</InputGroup.Text>
        <Form.Control type="number"
         required
         onChange={(event)=>setFieldValue('phoneNumber',event.target.value)}
          />
        </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03" align="left">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City"  onChange={(event)=>setFieldValue('city',event.target.value)}/>
          
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04" align="left">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State"  onChange={(event)=>setFieldValue('state',event.target.value)}/>
         
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05" align="left">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control type="text" placeholder="Pin code" onChange={(event)=>setFieldValue('pinCode',event.target.value)} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" align="left">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
  );
}