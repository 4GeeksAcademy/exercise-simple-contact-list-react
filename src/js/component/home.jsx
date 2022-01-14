import React from "react";

import ContactCard from "./ContactCard.jsx";
import AddContact from "./AddContact.jsx";


const Home = () => {
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<AddContact />
					<button type="button" className="btn btn-success" to="/add">
						Add new contact
					</button>
				</p>
				<div
					id="contacts"
					className="panel-collapse collapse show"
					aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard />
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
