import firebase from "../firebase"

export const getPosts = async () => {
    const postsRef = firebase.database().ref()
    const data = await postsRef.once("value")
    const posts = data.val()

    const PostsArray = []

    for (let key in posts) {
        PostsArray.push({
            id: key,
            title: posts[key].title,
            story: posts[key].story,
            image: posts[key].image,
            creators: posts[key].creators,
            stars: posts[key].stars,
            episode: posts[key].episode,
            youtube: posts[key].youtube
        })
    }

    return PostsArray
}

export const postAdd = async state => {
    const postsRef = firebase.database().ref()
    await postsRef.push(state)
}

export const postDelete = async id => {
    const postsRef = firebase.database().ref(id)
    await postsRef.remove()
}

export const postUpdate = async post => {
    console.log(post)
    const postsRef = firebase.database().ref(post.id)
    await postsRef.update(post)
}