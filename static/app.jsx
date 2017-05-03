 var { Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link } = ReactRouter;
    var destination = document.querySelector("#container");
    var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>HELLO</h2>
          <p>"This is site is made stritly for shootingla company use. It grants access to the shootingLA database and will provide an easy way for the users to add and edit information without going directly into the database. This site will also calculate the contracts based on the type of photographer that is being used. This will work based on the tier of the photographer and the appoximate square foot of the house." </p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});
    var Customers = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Customers</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Names of customers</li>
            <li>address of customers</li>
            <li>their phone numbers</li>
            <li>email</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

var Photographers = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Photographers</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Names of Photographers</li>
            <li>Type of photographer they are</li>
            <li>shoots they have been on</li>
            <li>Images of their headshots</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

    var Contracts = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Contracts</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>The different types of contracts</li>
            <li>How much each contract is worth</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

    var Locations = React.createClass({
  render: function() {
      return (
        <div>
          <h2>Locations</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Address</li>
            <li>Approximate square foot of house</li>
            <li>Owner of the house</li>
            <li>Agent who is selling house</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});
    var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>ShootingLA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/photographers" activeClassName="active">Photographers</Link></li>
          <li><Link to="/customers" activeClassName="active">Customers</Link></li>
          <li><Link to="/contracts" activeClassName="active">Contracts</Link></li>
          <li><Link to="/locations" activeClassName="active">Locations</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

    ReactDOM.render(
  <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="photographers" component={Photographers} />
      <Route path="contracts" component={Contracts} />
      <Route path="customers" component={Customers} />
      <Route path="locations" component={Locations} />
    </Route>
  </Router>,
  destination
);