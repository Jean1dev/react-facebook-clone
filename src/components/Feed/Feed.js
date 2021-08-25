import React, { useState, useEffect } from 'react';
import './Feed.css';

// components
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

// image
// import arif from '../../img/story/arif.jpg'
// import postImage from '../../img/story/storyImage/web-development.jpg'

// database
// import db from '../../firebase'
import { getFeed } from '../../apis/post/PostService'

const Feed = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        // db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        //     setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        // })
        getFeed().then(({ data }) => {
            data.forEach(feed => {
                setPosts(feed.posts)
            })
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.profilePic}
                        message={post.message}
                        timestamp={post.timestamp}
                        username={post.username}
                        image={post.image}
                    />
                ))
            }
            {/* <Post
                key='1'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
                image={postImage}
            />
            <Post
                key='2'
                profilePic={arif}
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
            /> */}
        </div>
    )
}

export default Feed;
