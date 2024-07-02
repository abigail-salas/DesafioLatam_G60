import { useContext } from "react";
import { Table } from "react-bootstrap";
import { PostsContext } from "../context/PostsContext";

const PostsTable = () => {
  const { posts, setPosts } = useContext(PostsContext);

  const removePost = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      className="container mt-5 text-center"
    >
      <thead>
        <tr>
          <th>Foto</th>
          <th>Título</th>
          <th>Color</th>
          <th>Descripción</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map(({ title, photo, description, color }, i) => (
          <tr
            key={i}
            className="align-middle"
          >
            <td>
              <img
                src={photo}
                height="50"
                alt=""
              />
            </td>
            <td>{title}</td>
            <td>
              <div
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  background: color,
                }}
              ></div>
            </td>
            <td>{description}</td>
            <td>
              <span
                onClick={() => removePost(i)}
                role="button"
              >
                ❌
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default PostsTable;
