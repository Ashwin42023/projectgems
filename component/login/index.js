import React from "react";
import styles from "./styles.module.css";
import { Button, Form ,Spinner} from "react-bootstrap";
import Link from "next/link";
import {FaArrowLeft , FaArrowRight} from "react-icons/fa"
import { Field, Formik } from "formik";
import axios from "axios";
import { useRouter } from "next/router";

import * as yup from "yup";
import InputField from "../fields/inputfield";
import { LoginService } from "../services/authService";


const defaultValues = {
  email: "",
  password: "",
};


function LoginComponent() {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    const res = await LoginService({
      password: values.password,
      email: values.email,
    });

    if (res.success) {
      // window.location = "/users";
      router.replace("/users");
    } else {
      alert(res.message);
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
                                disabled={isSubmitting}
                                type="submit"
                                // variant={isSubmitting ? "secondary" : "primary"}
                                className={`btn w-100 ${
                                  isSubmitting ? "bg-secondary" : "bg-primary"
                                } bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0`}
                              >
                                {/* {isSubmitting ? "Submitting..." : "Login >>"} */}
                                {isSubmitting ? (
                                  <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </Spinner>
                                ) : (
                                  "Login"
                                )}
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