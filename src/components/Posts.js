import Post from "./Post"
import { MdAddCircleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Posts = props => {
    if (props.posts === null) return <div class="d-flex justify-content-center"><div class="spinner-border text-light m-5" role="status">
        <span class="sr-only">Loading...</span>
    </div></div>
    else if (props.posts.length === 0)
        return (

            <div className="container">
                <h2 className="mx-auto mt-5">There is no posts yet</h2>
            </div>
        )
    else
        return (
            <>
                <br />
                <div className="container" >
                    <NavLink to="/Newpost" className="buttonadd">
                        <MdAddCircleOutline /> Add new post</NavLink>
                    <div className="row">
                        {props.posts.map(post => {
                            return (
                                <Post
                                    key={post.id}
                                    post={post}
                                    handleConfirmDelete={props.handleConfirmDelete}
                                />
                            )
                        })}
                    </div>
                    <br />
                </div>
            </>
        )
}

export default Posts