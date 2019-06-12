import React, {Component} from 'react';

const img_home = "images/aws/";
const practitioner = img_home + "aws_practitioner.png";
const architect = img_home + "aws_solution_architect.png";
const developer = img_home + "aws_developer.png";
const sysops = img_home + "aws_sysops_administrator.png";
const badge_url = "https://www.certmetrics.com/amazon/public/badge.aspx";
const practitioner_url = badge_url + "?i=9&t=c&d=2018-12-27&ci=AWS00691366";
const architect_url = badge_url + "?i=1&t=c&d=2018-12-31&ci=AWS00691366";
const developer_url = badge_url + "?i=2&t=c&d=2019-01-04&ci=AWS00691366";
const sysops_url = badge_url + "?i=3&t=c&d=2019-01-11&ci=AWS00691366";

const practitionerDescription = "AWS Practitioner badge";
const architectDescription = "AWS Solution Architect badge";
const developerDescription = "AWS Developer badge";
const sysOpsDescription = "AWS SysOps Administrator badge";

const idPrefix = "certs-";
let lastId = 0;

class Certificates extends Component {
	componentWillMount() {
		this.id = idPrefix + (++lastId);
	}
	render() {
		return (
		<section style={center}>
			<ul className="nav">
				{this.getCertificate(practitioner_url, practitioner_url, practitioner, practitionerDescription)}
				{this.getCertificate(architect_url, architect_url, architect, architectDescription)}
				{this.getCertificate(developer_url, developer_url, developer, developerDescription)}
				{this.getCertificate(sysops_url, sysops_url, sysops, sysOpsDescription)}
			</ul>
		</section>
	)
		;
	}

	getCertificate(key, pageUrl, imgSrc, imgDescription) {
		return (
			<li key={key}  style={displayInlineBlock}>
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
