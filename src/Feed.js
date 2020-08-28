import React,{useState,useEffect} from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts,setPosts]= useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
      />
      <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://www.simplilearn.com/ice9/free_resources_article_thumb/fullstack_php_js.jpg"
      />
      <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://blog.sagipl.com/wp-content/uploads/2019/08/Social-Media-Post.jpg"
      />
      <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://socialmediaweek.org/wp-content/blogs.dir/1/files/2015/11/ecommerce-social.jpg"
      />
      <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://files.realpython.com/media/Python-Debugging-With-Pdb_Watermarked.a50a90b655cf.jpg"
      />
      <Post 
        profilePic={"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.0-1/cp0/c0.15.60.60a/p60x60/24131575_2445993195626646_5190056665071344553_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=1j08j95Cj3EAX_LYrzZ&_nc_ht=scontent.fhyd5-1.fna&oh=47e18bc3cab01bd6317091f9b42426dc&oe=5F6FF27C"}
        message="Wow this works"
        timestamp="This is a timestamp"
        username="hari krishna"
        image="https://miro.medium.com/max/2908/1*Y6RBVAodimMtU6V907tC_A.jpeg"
      /> */}
    </div>
  );
}

export default Feed;
