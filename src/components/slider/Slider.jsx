import React from 'react';
import Slider1 from '../../assets/img/slider1.jpg'
import Slider2 from '../../assets/img/slider2.jpeg'
import Slider3 from '../../assets/img/slider3.jpg'
import './style.css'
export const Slider = () => {

  	return (

		<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
		<div class="carousel-inner slider-img">
		  <div class="carousel-item active">
			<img src={Slider1} className="d-block w-100" alt="..."/>
		  </div>
		  <div class="carousel-item">
			<img src={Slider2} className="d-block w-100" alt="..."/>
		  </div>
		  <div class="carousel-item">
			<img src={Slider3} className="d-block w-100" alt="..."/>
		  </div>
		</div>
		<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
		  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span className="visually-hidden">Previous</span>
		</button>
		<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
		  <span className="carousel-control-next-icon" aria-hidden="true"></span>
		  <span className="visually-hidden">Next</span>
		</button>
	  </div>

  	)
}