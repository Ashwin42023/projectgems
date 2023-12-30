import React from "react";
import styles from "./styles.module.css";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import {FaArrowLeft , FaArrowRight} from "react-icons/fa"
import { Field, Formik } from "formik";
import axios from "axios";

import * as yup from "yup";
import InputField from "../fields/inputfield";



const defaultValues = {
  email: "",
  password: "",
};

// function LoginComponent() {
//   const [issubmitting, setIsSubmitting] = React.useState(false);
//   const handleFormSubmit = async (values,{setSubmitting}) => {
//     await axios
//       .post("https://reqres.in/api/login", {
//         email: values.email,
//         password: values.password,
      
//       })
//       .then(function (response) {
//         localStorage.setItem("userAuthToken", response.data.token);
//         window.location = "/home";
//         setIsSubmitting(true);
        
//       })
//       .catch(function (error) {
//         if (error?.response?.status == 400) {
//           alert(error.response?.data?.error);
//         } else {
//           alert(error.message);
//         }
//       });
     
//   };
//   const validationSchema = yup.object().shape({
//     email: yup.string().required().email(),
//     password: yup.string().required().min(6).max(20),
//     // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
//   });
function LoginComponent() {
  const [issubmitting, setIsSubmitting] = React.useState(false);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setIsSubmitting(true);

      // Simulate an asynchronous API call
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000); // Simulate a 2-second delay
      });

      // Actual API call
      const response = await axios.post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("userAuthToken", response.data.token);
      window.location = "/home";
    } catch (error) {
      if (error?.response?.status === 400) {
        alert(error.response?.data?.error);
      } else {
        alert(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
  });

 

    return (
    <>
         <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                {/* <Alert key="danger" variant="danger">
                  This is a alert—check it out!
                </Alert> */}
                <Formik
                  validationSchema={validationSchema}
                  onSubmit={handleFormSubmit}
                  initialValues={defaultValues}
                >
                  {({ handleSubmit , isSubmitting }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit}>
                        <div
                    className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                  >
                  
                    <div className="row my-2">
                      <div className="col-12">
                        <h2
                          className={`${styles.contactFormHeading} text-center`}
                        >
                          Login Here
                        </h2>
                        <p
                          className={`${styles.contactFormParagh} text-center text-dark`}
                        >
                          Welcome guyzzzz...!
                        </p>
                      </div>
                      <div className="col-12 my-2">
                              <Field
                                name="email"
                                placeholder="Email Address"
                                label="Email"
                                component={InputField}
                              />
                            </div>
                      <div className="col-12 my-2">
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                component={InputField}
                              />
                      </div>


                      <div className="col-12 mx-auto my-2 mt-4">
                        <Button
                          type="submit"
                          disabled={issubmitting}
                          className="btn w-100 bg-primary bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0"
                        >
                         {issubmitting ? 'please wait...' : 'login'}
                        </Button>
                      </div>

                      <div className="col-12 mt-4 d-flex justify-content-between">
                      <Link href="/" className={styles.ashwin}><FaArrowLeft/>Back</Link>
                      <Link href="/signup" className={styles.ashwin}>Signup<FaArrowRight/></Link>
                      
                      </div>
                    </div>
                  </div>
                </Form>
                    );
                  }}
                  </Formik>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default LoginComponent;