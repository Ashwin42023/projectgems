import React from 'react'

function NavbarPage() {
  return (
	
	<nav class="navbar navbar-expand-xl">
		<div class="container-fluid px-3 px-xl-5">
			<a class="navbar-brand" href="index.html"><span>logo</span>
				
			</a>
			<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-animation">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
			<div class="navbar-collapse w-100 collapse" id="navbarCollapse">

				<ul class="navbar-nav navbar-nav-scroll me-auto">
				
					<li class="nav-item dropdown dropdown-menu-shadow-stacked">
						<a class="nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-ui-radios-grid me-2"></i><span>Category</span></a>
						<ul class="dropdown-menu" aria-labelledby="categoryMenu">

							<li> <a class="dropdown-item" href="#">Design</a></li>
						
							<li> <a class="dropdown-item" href="#">Development</a></li>
							<li> <a class="dropdown-item" href="#">UI/UX Design</a></li>
							<li> <a class="dropdown-item" href="#">IT & software</a></li>
							<li> <a class="dropdown-item" href="#">React Developer</a></li>
							<li> <a class="dropdown-item" href="#">Node Developer</a></li>
							<li> <a class="dropdown-item" href="#">React Native Developer</a></li>
							<li> <a class="dropdown-item" href="#">Testing</a></li>
							<li> <a class="dropdown-item" href="#">Angular Developer</a></li>
							<li> <hr class="dropdown-divider"/></li>
							<li> <a class="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" href="#">View all categories</a></li>
						</ul>
					</li>
				</ul>
	
				<ul class="navbar-nav navbar-nav-scroll me-auto">
				
					<li class="nav-item">
						<a class="nav-link" href="./index.html">Home</a>
						
					</li>

				
					<li class="nav-item">
						<a class="nav-link" href="./user-list.html">Users List</a>
					</li>
					
			
					<li class="nav-item">
						<a class="nav-link" href="./profile.html">Profile</a>
					
					</li>
				</ul>
			

			
				<div class="nav my-3 my-xl-0 px-md-4 flex-nowrap align-items-center">
					<div class="nav-item w-100">
						<form class="position-relative">
							<input class="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
							<button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
								<i class="fas fa-search fs-6 "></i>
							</button>
						</form>
					</div>
                    <div class="nav-item">
						<a class="nav-link" href="./signup.html" id="accounntMenu" >SignUp</a>
					</div>
                    <div class="nav-item">
						<a class="nav-link" href="./login.html" id="accounntMenu">Login</a>
					</div>
				</div>
			
			</div>
		
		</div>
	</nav>
  )
}

export default NavbarPage;