import { useContext } from "react";
import PostCard from "../components/PostCard";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <h1 className="pb-3">Publicaciones</h1>
      <div className="publicaciones row">
        {posts.map((post, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
