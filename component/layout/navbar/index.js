import React from 'react'
import {
	Button,
	Container,
	Form,
	Nav,
	NavDropdown,
	Navbar,
	NavbarCollapse,
  } from "react-bootstrap";
  
import { BsSearch, BsUiRadiosGrid } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"


function NavbarPage() {
  return (
	
	<Navbar data-bs-theme="primary">
	<Container fluid className="px-3 px-xl-5">
	  <Navbar.Brand href="#">
		<Image
		  src="/assets/images/dragon.jpg"
		  width={100}
		  height={50}
		  alt="logo"
		/>
	  </Navbar.Brand>
	  <NavbarCollapse>
		<NavDropdown
		  id="navbarScrollingDropdown"
		  className="hide-dd-icon bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0 me-auto"
		  title=<>
			<BsUiRadiosGrid /> Category
		  </>
		>
		  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
		  <NavDropdown.Item href="#action4">Ruby</NavDropdown.Item>
		  <NavDropdown.Item href="#action4">React</NavDropdown.Item>
		  <NavDropdown.Item href="#action4">Java</NavDropdown.Item>
		</NavDropdown>

		<Nav className="me-auto" >
		  {/* <Link href="/login" className="nav-link">
			About Us
		  </Link> */}
		  <Link href="/" className="nav-link"  id= {styles.ashwin}>
			Home
		  </Link>
		  <Nav.Link href="/users" id= {styles.ashwin}>User List</Nav.Link>
		  <Nav.Link href="#pricing"  id= {styles.ashwin}>Profile</Nav.Link>
		</Nav>

		<div className="nav my-3 my-xl-0 px-md-4 flex-nowrap align-items-center">
		  <div className="nav-item w-100">
			<Form className="position-relative">
			  <Form.Control
				type="search"
				placeholder="Search"
				className="me-2"
				aria-label="Search"
			  />
			  <Button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset">
				<BsSearch />
			  </Button>
			</Form>
		  </div>
		</div>

		<Nav>
		  <Link href="/signup" className="nav-link" id= {styles.ashwin}>
			<span>Signup</span>
		  </Link>
		  <Link href="/login" className="nav-link" id = {styles.ashwin}>
			<span>Login</span>
		  </Link>
		</Nav>
	  </NavbarCollapse>
	</Container>
  </Navbar>
  )
}

export default NavbarPage;