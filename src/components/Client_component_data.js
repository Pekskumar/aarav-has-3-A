import React from "react";
import Client_component from "./Client_component";
import Client_component_api from "./Client_component_api";

function Client_component_data () {
	return (
		<>
			<section className="client_component text-align-center responsive-padding">
			<div className="container">
				<div class="general-heading ">
					<h4>We are fortunate to work with exceptional brands</h4>
					<h2>Our Clients</h2>
				</div>

				<div class="clients d-flex ">
					
					<Client_component 
					imgsrc={Client_component_api[0].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[1].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[2].imgsrc}
			      	/>

			      	
			      	<Client_component 
					imgsrc={Client_component_api[5].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[6].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[7].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[8].imgsrc}
			      	/>

			      	<Client_component 
					imgsrc={Client_component_api[9].imgsrc}
			      	/>

			      
			      	
		</div>
				
		</div>
		</section>
		</>
		)
}

export default Client_component_data;