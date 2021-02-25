import React, { Component } from "react"
import { Form, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

class UpdatePost extends Component {
    state = {
        id: this.props.post.id,
        title: this.props.post.title,
        story: this.props.post.story,
        image: this.props.post.image,
        creators: this.props.post.creators,
        youtube: this.props.post.youtube,
        stars: this.props.post.stars,
        episode: this.props.post.episode,
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    validate = e => {
        e.preventDefault()
        const { title, story } = this.state
        if (title.length > 2 && story.length > 2) {
            this.props.handleUpdate(
                this.state
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <>
                <br /><br />
                <Container className="form1">
                    <h1>Update Post:</h1>
                    <Form onSubmit={this.validate} className="mt-3">
                        <Form.Group controlId="formBasicPostTitle">
                            <Form.Label>Post Title:</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.title}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPostBody">
                            <Form.Label>Post Story:</Form.Label>
                            <Form.Control
                                name="story"
                                as="textarea"
                                rows={3}
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.story}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPostBody">
                            <Form.Label>Creators:</Form.Label>
                            <Form.Control
                                name="creators"
                                as="textarea"
                                rows={3}
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.creators}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPostBody">
                            <Form.Label>Stars:</Form.Label>
                            <Form.Control
                                name="stars"
                                as="textarea"
                                rows={3}
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.stars}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPostBody">
                            <Form.Label>Episode:</Form.Label>
                            <Form.Control
                                name="episode"
                                as="textarea"
                                rows={3}
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.episode}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPostBody">
                            <Form.Label>Youtube:</Form.Label>
                            <Form.Control
                                name="youtube"
                                as="textarea"
                                rows={3}
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.youtube}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPostImage">
                            <Form.Label>Post Image:</Form.Label>
                            <Form.Control
                                name="image"
                                type="url"
                                id="text1"
                                onChange={this.handleChange}
                                value={this.state.image}
                                required
                            />
                            <Form.Text className="text-muted">
                                Example: https://images.com/abcd.png
            </Form.Text>
                        </Form.Group>
                        <Button className="submitup m-2" type="submit">
                            Submit
                    </Button>
                        <Link to="/posts"><Button className="submitup" type="cancel">
                            Cancel
            </Button>
                        </Link>
                    </Form>
                </Container>
                <br /><br /><br />
            </>
        )
    }
}
export default UpdatePost