import React, { Component } from "react";
import ReactDOM from "react-dom";
import Blog from "./components/Blog";
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Route exact path="/" component={Example} />
                    <Route exact path="/blog" component={Blog} />
                    <Route
                        path="/blog/:id"
                        exact
                        render={props => <BlogArticle{...props} />}
                    />
                </div>
            </Router>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}
