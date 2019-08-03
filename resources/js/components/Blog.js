import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }
    componentWillMount() {
        axios
            .get("/api/blog")
            .then(res => {
                this.setState({
                    blogs: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog => (
                    <li key={blog.id}>
                    <Link to={"/blog/" + blog.id}>{blog.name}</Link>
                    </li>
                ))}
            </div>
        );
    }
}