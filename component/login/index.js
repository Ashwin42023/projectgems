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

function LoginComponent() {
  const handleFormSubmit = (values) => {
    axios
      .post("https://reqres.in/api/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("userAuthToken", response.data.token);
        window.location = "/home";
      })
      .catch(function (error) {
        if (error?.response?.status == 400) {
          alert(error.response?.data?.error);
        } else {
          alert(error.message);
        }
      });
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
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
                  {({ handleSubmit }) => {
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
                          className="btn w-100 bg-primary bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0"
                        >
                          Login &gt;&gt;
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