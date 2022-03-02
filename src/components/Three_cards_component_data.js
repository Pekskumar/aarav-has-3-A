import React from "react";
import Three_cards_component from "./Three_cards_component";
import Three_cards_component_api from "./Three_cards_component_api";
import { NavLink, Link} from "react-router-dom";

function Three_cards_component_data () {
	return (
		<>
		<section className="include-section text-align-center responsive-padding team-bg">
				<div id="particles-js-four"></div>
				<div className="container">
				<div class="general-heading ">
					<h4>Meet the people who make awesome stuffs</h4>
					<h2>Our Team</h2>
				</div>
				<div class="three_cards_component d-flex  ">

				<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-wordpress-simple"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Tina Houghton</h3>
							<span className="speciality">WordPress Developer</span>
						</div>
					</div>

					<div className="single-person">
						<div className="person-image">
							<img src="https://scontent.famd15-1.fna.fbcdn.net/v/t1.6435-9/59087127_2418278898204988_7334580041528901632_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0sOmbTkM8y0AX827vNs&_nc_ht=scontent.famd15-1.fna&oh=00_AT_flQwd7oDllGuKUUpICilZYe-yIaDpkfWHAyXd9rjGnQ&oe=62434A2A" alt="" />
							<span className="icon">
								<i className=" fab fa-react"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Pek's Kumar</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>



					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">John Doe</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>

					

					<div className="single-person">
						<div className="person-image">
							<img src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80" alt="" />
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Jose Keys</h3>
							<span className="speciality">Quality Assurance</span>
						</div>
					</div>

					

				

					

			      	
				</div>
				
	</div>
      	
		</section>


		</>
		)
}

export default Three_cards_component_data;