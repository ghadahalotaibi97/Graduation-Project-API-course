import React, { Component } from 'react';
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route, NavLink } from "react-router-dom"
import { Button, Modal } from "react-bootstrap";

class Posts extends Component {
    state = {
        showView: false,
        showDelete: false,
    }
    handleCloseView = () => {
        this.setState({ showView: false })
    }
    handleCloseDelete = () => {
        this.setState({ showDelete: false })
    }
    handleView = postId => {
        this.setState({ showView: true })
    }
    handleDelete = postId => {
        this.setState({ showDelete: true })
    }

    render() {
        return (
            <>
                <div className="card border-secondary mx-auto mt-5" style={{ width: "22rem" }} >
                    <img src={this.props.post.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.post.title}</h5>
                        <p className="card-text">{this.props.post.story}</p>
                    </div>
                    <div className="card-footer mx-auto">
                        <button onClick={this.handleView} className="button ">
                            View
              </button>
                        <NavLink
                            to={"/posts/" + this.props.post.id + "/update"}
                        ><button className="ml-2 button">Update</button>
                        </NavLink>
                        <button
                            onClick={() => this.handleDelete(this.props.post.id)}
                            className="ml-2 button"
                        >
                            Delete
                  </button>
                    </div>
                </div>
                <Modal show={this.state.showView} onHide={this.handleCloseView}>
                    <Modal.Header className="modal2" closeButton>
                        <Modal.Title>{this.props.post.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal1">
                        <iframe width="420" height="345" src={this.props.post.youtube}></iframe>
                        <h5>Story:</h5>
                        {this.props.post.story}
                        <br />
                        <h5> Creators:</h5>
                        {this.props.post.creators}
                        <br />
                        <h5> Stars:</h5>
                        {this.props.post.stars}
                        <h5>Episode Guide:</h5>
                        {this.props.post.episode}

                    </Modal.Body>
                    <Modal.Footer className="modal1">
                        <Button className="submitup" onClick={this.handleCloseView}>
                            ok
            </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showDelete} onHide={this.handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete it ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleCloseDelete}>
                            Cancel
            </Button>
                        <Button
                            variant="danger"
                            onClick={() =>
                                this.props.handleConfirmDelete(
                                    this.props.post.id,
                                    this.handleCloseDelete
                                )
                            }
                        >
                            Delete
            </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Posts