import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
export default PostProvider;
