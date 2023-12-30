import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link';
import {FaArrowLeft , FaArrowRight} from "react-icons/fa"

function SignupComponent() {
  return (
    <>
    <section class="p-0">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-5 col-md-7 col-12 mt-4">
                <form action="">
                    <div class="contactFormWrapper bg-primary bg-opacity-10 p-md-5 p-2 pt-1 rounded">
                      
                        <div class="row my-2">
                            <div class="col-12">
                                <h2 class="contact-form-heading text-center">Get In Touch</h2>
                                <p class="contact-form-paragh text-center">faucibus ultrices facilisis odio amet, luctus vehicula, turpis elit. Sed placerat. 
                                </p>
                            </div>
                            <div class="col-12 my-2">
                                <input type="text" class="form-control shadow-none" placeholder="Full name" aria-label="Full name"/>
                            </div>
                            <div class="col-12 my-2">
                                <input type="email" class="form-control shadow-none" placeholder="Email" aria-label="Email"/>
                            </div>
                            <div class="col-12 my-2">
                                <input type="text" class="form-control shadow-none" placeholder="Contact with Country Code" aria-label="Contact"/>
                            </div>
                            <div class="col-12 my-2">
                                <input type="password" class="form-control shadow-none" placeholder="Password" aria-label="password"/>
                            </div>
                            <div class="col-12 my-2">
                                <input type="password" class="form-control shadow-none" placeholder="confirm Password" aria-label="c-password"/>
                            </div>
              
                            <div class="col-12 mx-auto my-2 mt-4">
                                <button class="btn w-100 py-3 bg-primary text-white bg-opacity-50" type="button"><i class="fa fa-lock"></i> Signup</button>
                            </div>
                            <div class="col-12 mt-4 d-flex justify-content-between">
                            <Link href="/" className={styles.ashwin}><FaArrowLeft/>Back</Link>
                            <Link href="/login" className={styles.ashwin}>Login<FaArrowRight/></Link>
                      
                           </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default SignupComponent;