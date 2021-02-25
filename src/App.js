import './App.css';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Posts from './components/Posts'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link, Switch, Route } from "react-router-dom"
import Newpost from './components/Newpost';
import React, { Component } from "react"
import { getPosts, postAdd, postDelete, postUpdate } from "./utils/httpService"
import App2 from './components/App2'
import UpdatePost from './components/UpdatePost'
import firebase from "./firebase"

class App extends Component {
  state = {
    posts: null,
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts: posts })
  }

  handleAdd = async state => {
    await postAdd(state)
    const posts = await getPosts()
    this.setState({ posts: posts })
  }

  handleConfirmDelete = async id => {
    await postDelete(id)
    const posts = await getPosts()
    this.setState({ posts: posts })
  }
  handleUpdate = async post => {
    await postUpdate(post)
    const posts = await getPosts()
    this.setState({ posts: posts })
  }
  render() {
    return (

      <>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/Newpost"
            render={props => <Newpost {...props} handleAdd={this.handleAdd} />}
          />
          <Route
            exact
            path="/Posts"
            render={props => <Posts {...props} posts={this.state.posts} handleConfirmDelete={this.handleConfirmDelete} />}
          />
          <Route
            path="/posts/:id/update"
            render={props => {
              if (this.state.posts) {
                const { match } = props
                const postId = match.params.id
                const post = this.state.posts.find(
                  post => post.id == postId
                )
                console.log(post)
                return (
                  <UpdatePost
                    {...props}
                    handleUpdate={this.handleUpdate}
                    post={post}
                  />
                )
              }
            }}
          />
        </Switch>
        <Footer />
      </>

    );
  }
}
export default App;