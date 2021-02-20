import React, { useRef, useState } from "react";
import axios from "axios";
import NProgress from "react-nprogress";
import "nprogress/nprogress.css";
import * as qs from "query-string";
import { navigate } from "gatsby";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 30rem;
  border: thin solid ${({ theme }) => theme.silver};
  box-shadow: 0.25rem 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  padding: 2rem;
  background: rgba(17, 27, 48, 0.5);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.75rem;
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
  }
  label {
    font-size: 1.6rem;
    padding-bottom: 0.75rem;
  }
  input {
    width: 100%;
    font-size: 1.8rem;
    margin-top: 0.25rem;
  }
  textarea {
    width: 100%;
    font-size: 1.8rem;
    margin-top: 0.25rem;
  }
  button {
    background: ${({ theme }) => theme.primaryHover};
    font-size: 2rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "futura-pt";
  }
  
  
`;


export default function ContactForm({ location }) {
  const companyRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(loading)
    NProgress.start();
    sessionStorage.setItem("form", nameRef.current.value);
    const formData = {
      "form-name": "contact",
      "company": companyRef.current.value,
      "name": nameRef.current.value,
      "email": emailRef.current.value,
      "phone": phoneRef.current.value,
    }
    const axiosOptions = {
      url: location.href,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    axios(axiosOptions)
      .then(response => {
        setMessage("Form Submitted Successfully")
        formRef.current.reset()
      })
      .catch(err => {
        setMessage("Form Could Not Be Submitted")
      })
    setLoading(!loading)
    NProgress.done();
    navigate("/thanks")    
  }
  return (
    <>
    {message && <div>{message}</div>}

    <StyledForm
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
    action="/thanks"
    ref={formRef}
    name="contact"
    onSubmit={e => handleSubmit(e)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="company">Company Name: <br />
        <input type="text" name="company" ref={companyRef} placeholder="Your Company Name" required /></label>
      </div>
      <div>
        <label htmlFor="name">Name: <br />
        <input type="text" name="name" ref={nameRef} placeholder="Your Name" required /></label>
      </div>
      <div>
        <label htmlFor="email">Email: <br />
        <input type="email" name="email" ref={emailRef} placeholder="Your Email" required /></label>
      </div>
      <div>
        <label htmlFor="phone">Contact No: <br />
        <input type="tel" name="phone" ref={phoneRef} placeholder="Your Phone No." maxLength="10" required /></label>
      </div>
      <div>
        <label htmlFor="message">Message: <br />
        <textarea type="textarea" rows="5" name="message" ref={messageRef} /></label>
      </div>
      <div>
        <button
        type="submit" disable="loading">Submit</button>
      </div>
    </StyledForm>

    </>
  )
}