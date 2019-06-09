import React, {Component} from 'react';

class Certificates extends Component {
	render() {

		var practitioner = "images/aws/aws_practitioner.png";
		var practitioner_url = "https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-12-27&ci=AWS00691366";
		var architect = "images/aws/aws_solution_architect.png";
		var architect_url = "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-12-31&ci=AWS00691366";
		var developer = "images/aws/aws_developer.png";
		var developer_url = "https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-01-04&ci=AWS00691366";
		var sysops = "images/aws/aws_sysops_administrator.png";
		var sysops_url = "https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2019-01-11&ci=AWS00691366";


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
