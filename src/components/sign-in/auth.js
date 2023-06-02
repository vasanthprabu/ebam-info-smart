import React, { useContext, useState } from "react"
import './auth.css';
import { Link, useNavigate  } from 'react-router-dom';
import store from 'store';
import { authContext } from "../Auth/AuthProvider";
import { Container,Row,Col,Form,Button,Card,FloatingLabel,Carousel,Figure,Toast, ToastContainer } from "react-bootstrap";
import image1 from "../../images/e-comm-1.jpg";
import image2 from "../../images/e-comm-2.jpg";
import image3 from "../../images/e-comm-3.png";
import axios from "axios";
import EbamToast from "../../utils/EbamToast";
import bgVideo from "../../videos/ebamINFO-bg-video.mp4";
export default function (props) {
    const [validated, setValidated] = useState(false);
    const [notification, setNotification] = useState(false);
    const [rowData,setRowData] = useState({});
    const [ errors, setErrors ] = useState({})
    const [position, setPosition] = useState('top-end');
    const [dismissible,setDismissible] = useState(false);
    const navigate = useNavigate();
    const { setAuthData } = useContext(authContext);
    
    const setFieldValue = (name,value) =>{
        const updated = {
          ...rowData,
          [name] : value
        }
        if (!!errors[name]) {
          setErrors({
            ...errors,
            [name]: null
          })
        }
        setRowData(updated);
    }
    const handleSubmit = async(event) => {
       console.log("Handle submit started !");
       event.preventDefault();
       event.stopPropagation();
       const newErrors = findFormErrors();
      if ( Object.keys(newErrors).length > 0 ) {
          console.log("Error is here >>>",newErrors);
          setErrors(newErrors)
        } else {
          console.log("bodyFormData >>>>",rowData);
          await axios({
            method: 'post',
            url: 'http://localhost:3200/auth/login',
            data : rowData
            })
            .then(function (response) {
                 axios({
                  method: 'get',
                  url: 'http://localhost:3200/profile',
                  headers: {"Authorization" : `Bearer ${response.data.access_token}`}
                  })
                .then((successResponse)=>{
                  setNotification(true);
                  store.set('loggedIn',true);
                  setAuthData({email:"prabu",password:"Test@123"})
                  navigate("/dashboard");
                  setNotification(false);
                })
                .catch((errorResponse)=>{
                  setNotification(true);
                })
            })
            .catch(function (response) {
                console.log(response);
                setNotification(true);
                setDismissible(true);
            });
            
          

        }
    }

    async function getUserToken(formdata){
        return await axios.post('http://localhost:3200/auth/login',rowData,{
          headers: {
            'Content-Type': 'application/json'
        },   
        })
      }

      const findFormErrors = () => {
        const { username, password } = rowData
        const newErrors = {}
        // username errors
        if ( !username || username === '' ) newErrors.username = 'Please enter username!'
        else if ( username.username > 30 ) newErrors.username = 'username is too long!'
        // password errors
        if ( !password || password === '' ) newErrors.password = 'Please enter password!'
        return newErrors
    }

  return (
    <Container fluid>
      {/* <video autoPlay loop muted id="video">
          <source src={bgVideo} type="video/mp4"/>
      </video> */}
      <Row>
      <Col sm={6}>
      <div style={{height:'100%',marginTop:'4%'}}>
        <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Ebam INFO Smart Services</h3>
            <p>Providing end-to-end digital service plaform for e-commerce</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Ebam INFO Smart Services</h3>
            <p>Providing end-to-end delarship service plaform for e-commerce</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Ebam INFO Smart Services</h3>
            <p>
            Providing end-to-end payment history service plaform for e-commerce.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
      </Col>
      <Col sm={6}>
      <div style={{height:'100%',marginTop:'4%'}}>
      <Card>
      <Card.Header className="card-header-signin">Ebam INFO Login Page</Card.Header>
      <Card.Body className="card-body-signin">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="validationCustom01" align="left">
                <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                >
                <Form.Control
                    required
                    type="text"
                    placeholder="User name"
                    name="username"
                    onChange={(event)=>setFieldValue('username',event.target.value)}
                    isInvalid={ !!errors.username }
                />
                <Form.Control.Feedback type="invalid">
                { errors.username }
                </Form.Control.Feedback>
                </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="validationCustom03" align="left">
                <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                 type="password"
                 placeholder="Password"
                 required 
                 name="password"
                 onChange={(event)=>setFieldValue('password',event.target.value)}
                 isInvalid={ !!errors.password }
                 />
                <Form.Control.Feedback type="invalid">
                { errors.password }
                </Form.Control.Feedback>
                </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="6" className="mb-6" align="left">
              <Form.Check
                label="Remember me"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-6" align="right">
                <Form.Label><a href="/forgotpassword">Forgot password ?</a></Form.Label>
            </Form.Group>
  
            <Button type="submit" variant="primary">Login</Button>
            </Row>
            <Row className="mb-3">
            <Figure >
                <Figure.Image
                    width={271}
                    height={300}
                    alt="271x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Brand footer image
                </Figure.Caption>
                </Figure>
            </Row>
            <Row className="mb-3">
            <p>
                Copyright protection comes with exceptions. Under section 107 of the Copyright Act, copyrighted works can be used or borrowed without the creator’s permission for “fair use” purposes, such as education or commentary.
            </p>
            </Row>
            
            
            </Form>
      </Card.Body>
    </Card>
    <EbamToast position={position} background={'danger'} flag={notification} strong={'Login Failed'} body={'Username/password invalid !'} dismissible={dismissible}/> 
      </div>
    </Col>
    </Row>
    
    </Container>
  )
}