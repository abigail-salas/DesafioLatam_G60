import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PostsContext } from "../context/PostsContext";

const PostCreate = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [post, setPost] = useState({
    title: "",
    photo: "",
    color: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    alert("Publicación agregada");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="row col-10 col-sm-9 col-md-8 col-lg-6 mx-auto mt-5 border border-light rounded p-4"
    >
      <h5 className="mb-3">Nueva publicación</h5>
      <hr />
      <Form.Group className="mb-3 col-12 col-md">
        <Form.Label>Título</Form.Label>
        <Form.Control
          value={post.title}
          name="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Foto URL</Form.Label>
        <Form.Control
          name="photo"
          onChange={(e) => setPost({ ...post, photo: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control
          name="color"
          onChange={(e) => setPost({ ...post, color: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
        />
      </Form.Group>
      <Button
        variant="light"
        className="col-5 col-sm-4 col-md-3 mx-auto"
        type="submit"
      >
        Agregar
      </Button>
    </Form>
  );
};
export default PostCreate;
