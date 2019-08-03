import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get("/api/blog/" + id)
            .then(res => {
                console.log(res)
            this.setState({post: res.data})
            })
            .catch(err => {
                throw err;
            })
    }
    render() {
        return (
            <div>
                <h1>{this.state.post.name}</h1>
                <p>{this.state.post.body}</p>
            </div>
        );
    }
}