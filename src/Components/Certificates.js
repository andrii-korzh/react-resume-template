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

class Certificates extends Component {
	render() {
		return (
			<section id="certificates">
				<a href={practitioner_url}>
					<img src={practitioner} alt="AWS Practitioner badge"/>
				</a>
				<a href={architect_url}>
					<img src={architect} alt="AWS Solution Architect badge"/>
				</a>
				<a href={developer_url}>
					<img src={developer} alt="AWS Developer badge"/>
				</a>
				<a href={sysops_url}>
					<img src={sysops} alt="AWS SysOps Administrator badge"/>
				</a>
			</section>
		);
	}
}

export default Certificates;
