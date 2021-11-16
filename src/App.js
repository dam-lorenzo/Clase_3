import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css'


function App() {
	return (
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Mi ecomerce</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Categorias</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Promos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Medios de Pago</a>
						</li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li class="nav-item">
							<a class="nav-link" href="#">Ver carrito</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default App;
