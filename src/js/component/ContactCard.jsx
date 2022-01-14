import React from "react";

const ContactCard = () => {
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
						alt="Mike Anamendolla"
						className="rounded-circle mx-auto d-block img-fluid"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button
							className="btn"
						>
							<i className="fas fa-pencil-alt mr-3"></i>
						</button>
						<button
							className="btn"
                        >
							<i className="fas fa-trash-alt"></i>
						</button>
					</div>
					<label className="name lead">Mike Anamendolla</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3"></i>
					<span className="text-muted">5842 Hillcrest Rd</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"></span>
					<span className="text-muted small">(870) 288-4149</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""></span>
					<span className="text-muted small text-truncate">
						mike.ana@example.com
					</span>
				</div>
			</div>
		</li>
	);
};

export default ContactCard;
