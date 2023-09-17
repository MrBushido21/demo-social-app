import './login.css'
import React from 'react';
import { Formik, Form, Field, withFormik } from 'formik';
import { Navigate } from 'react-router-dom';

//=========== Валідація
function validateEmail(value) {
  if (!value) {
    return "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return 'Invalid email address';
  }
}
function validatePassword(value) {
  if (!value) {
    return "Помилка!";
  }
}
function validateCheck(checked) {
  if (!checked) {
    return "Натисніть 'запам'ятати мене'!";
  }
}
//============ Верстка
function LoginForm(props) {

return <Form className='form'>
    <label className={`label ${props.errors.email && props.touched.email ? "label-error" : ""}`}>
      Email:
    </label>
    <Field
      className={`input ${props.errors.email && props.touched.email ? "input-error" : ""}`}
      type="text"
      validate={validateEmail}
      name="email"
      placeholder="Email"
      value={props.values.email || "mrbushido21@ukr.net"}
      onChange={props.handleChange}
    />
    {props.errors.email && props.touched.email && (
      <div className='error'>{props.errors.email}</div>
    )}
    <label className={`label ${props.errors.password && props.touched.password ? "label-error" : ""}`}>
      Password:
    </label>
    <Field
      className={`input ${props.errors.password && props.touched.password ? "input-error" : ""}`}
      type="password"
      validate={validatePassword}
      name="password"
      placeholder="Password"
      value={props.values.password}
      onChange={props.handleChange}
    />
    {props.errors.password && props.touched.password && (
      <div className='error'>{props.errors.password}</div>
    )}
    <div className='check-box'>
    <Field 
      className={`check ${props.errors.rememberMe && props.touched.rememberMe ? "error" : ""}`}
      type="checkbox"
      name="rememberMe"
      validate={validateCheck}
    />
    {props.errors.rememberMe && props.touched.rememberMe && (
      <div className='error'>{props.errors.rememberMe}</div>
    )}
    <span 
      className={`span-remember ${props.errors.rememberMe && props.touched.rememberMe ? "error" : ""}`}
    >remember me</span>
    </div>
    <button
     className={`login-btn ${props.errors.rememberMe || props.errors.email || props.errors.password  ? "error-button" : ""}`} 
     type="submit">Submit</button>

  </Form>
}

//=========== Тут логіка
const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({ email: null, password: null, rememberMe: null,}),
  handleSubmit: (values, { props }) => {
    props.setEmail(values.email);
    props.setPassword(values.password);
    props.LoginThunk(values.email, values.password, values.rememberMe)
    console.log("submit", values);
  }
})(LoginForm);


//======== Редірект
function Login(props) {
  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <>
      <h1>My Form</h1>
      <FormikLoginForm {...props} />
      {props.error && <div className="error">{props.error}</div>}
    </>
  );
}
//=============
export default Login;

