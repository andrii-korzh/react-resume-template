import React, {Component} from 'react';

const badge_url = "https://www.certmetrics.com/amazon/public/badge.aspx";
const practitioner_url = badge_url + "?i=9&t=c&d=2018-12-27&ci=AWS00691366";
const architect_url = badge_url + "?i=1&t=c&d=2018-12-31&ci=AWS00691366";
const developer_url = badge_url + "?i=2&t=c&d=2019-01-04&ci=AWS00691366";
const sysops_url = badge_url + "?i=3&t=c&d=2019-01-11&ci=AWS00691366";

const practitionerDescription = "AWS Practitioner badge";
const architectDescription = "AWS Solution Architect badge";
const developerDescription = "AWS Developer badge";
const sysOpsDescription = "AWS SysOps Administrator badge";

const imgHome = "images/aws";
const practitioner = "practitioner.png";
const architect = "solution_architect.png";
const developer = "developer.png";
const sysops = "sysops_administrator.png";

const idPrefix = "certs-";
let lastId = 0;

class Certificates extends Component {

	componentWillMount() {
		this.id = idPrefix + (++lastId);
	}

	render() {
		const dimension = "";
		const practitionerImage = imgHome + dimension + "/" + practitioner;
		const architectImage = imgHome + dimension + "/" + architect;
		const developerImage = imgHome + dimension + "/" + developer;
		const sysopsImage = imgHome + dimension + "/" + sysops;

		return (
			<section style={center}>
				<ul>
					{this.getCertificate(practitioner_url, practitioner_url, practitionerImage, practitionerDescription)}
					{this.getCertificate(architect_url, architect_url, architectImage, architectDescription)}
					{this.getCertificate(developer_url, developer_url, developerImage, developerDescription)}
					{this.getCertificate(sysops_url, sysops_url, sysopsImage, sysOpsDescription)}
				</ul>
			</section>
		)
			;
	}

	getCertificate(key, pageUrl, imgSrc, imgDescription) {
		return (
			<li key={key} style={displayInlineBlock}>
				<a href={pageUrl}>
					<img src={imgSrc} alt={imgDescription}/>
				</a>
			</li>
		);
	}
}

export default Certificates;

const center = {
	textAlign: 'center'
}

const displayInlineBlock = {
	display: 'inline-block'
}
