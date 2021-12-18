import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
      super(props);
    }
 
    render() {
 
      return (
    <article>
       <nav className="navbar">
		<div className="container">
			<div className="navbar-brand">
				<a className="navbar-item" href="../">
					<img src="../images/bulma.png" alt="Logo" />
				</a>
				<span className="navbar-burger burger" data-target="navbarMenu">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>
			<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-end">
					<a className="navbar-item is-active">Home</a>
					<a className="navbar-item">Examples</a>
					<a className="navbar-item">Features</a>
					<a className="navbar-item">Team</a>
					<a className="navbar-item">Archives</a>
					<a className="navbar-item">Help</a>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">Account</a>
						<div className="navbar-dropdown">
							<a className="navbar-item">Dashboard</a>
							<a className="navbar-item">Profile</a>
							<a className="navbar-item">Settings</a>
							<hr className="navbar-divider" />
							<div className="navbar-item">Logout</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	
	<section className="hero is-fullheight">
		<div className="hero-body">
			<div className="container has-text-centered">
				<div className="columns is-8 is-variable ">
					<div className="column is-two-thirds has-text-left">
						<h1 className="title is-1">Contact Us</h1>
						<p className="is-size-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta
							voluptate facere molestiae consequatur.</p>
						<div className="social-media">
						</div>
					</div>
					<div className="column is-one-third has-text-left">
						<div className="field">
							<label className="label">Name</label>
							<div className="control">
								<input className="input is-medium" type="text" />
							</div>
						</div>
						<div className="field">
							<label className="label">Email</label>
							<div className="control">
								<input className="input is-medium" type="text" />
							</div>
						</div>
						<div className="field">
							<label className="label">Message</label>
							<div className="control">
								<textarea className="textarea is-medium"></textarea>
							</div>
						</div>
						<div className="control">
							<button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </article>
      );
    }
  }
 
  export default Cards;