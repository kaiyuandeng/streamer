/** @jsx React.DOM */
BannerAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		console.log("hey in banner atom, eh the route could be: " + this.props.route)
		return this.state;
	},
	render: function() {
		return (
			<div className="top">
				<div className="banner">
					<div className="logo">W</div>
				</div>
				<WhereAtom route={this.props.route}/>
			</div>
		);
	}
});

var WhereAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		return this.state;
	},
	render: function() {
		return (
			<div className="whereAmI">
				<HereAtom route={this.props.route}  />
				<NearAtom route={this.props.route} />
			</div>
		);
	}
})

var HereAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		return this.state;
	},
	goToWhere: function() {
		Router.go("/here");
	},
	createClassname: function() {
		var className = "where here";
		if (this.props.route.indexOf("here") != -1) {
			className += " selected"
		}
		return className;
	},
	render: function() {
		return (
			<div className={this.createClassname()} onClick={this.goToWhere}>
				<div className="badge">#here</div>
			</div>
		);
	}
});

var NearAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		return this.state;
	},
	goToWhere: function() {
		Router.go("/near");
	},
	createClassname: function() {
		var className = "where near";
		if (this.props.route.indexOf("near") != -1) {
			className += " selected"
		}
		return className;
	},
	render: function() {
		return (
			<div className={this.createClassname()} onClick={this.goToWhere}>
				<div className="badge">#near</div>
			</div>
		);
	}
});