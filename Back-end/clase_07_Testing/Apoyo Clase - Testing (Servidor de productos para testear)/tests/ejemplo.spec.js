const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {
  it("Debe devolver un status code 200 en GET /productos", async () => {
    const response = await request(server).get("/productos").send();

    expect(response.statusCode).toBe(200);
  });

  it("Debe devolver un array de productos", async () => {
    const response = await request(server).get("/productos").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  it("Debe devolver un Objeto de un producto", async () => {
    const response = await request(server).get("/productos/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });

  it("Debe agregar un nuevo producto", async () => {
    const id = Math.floor(Math.random() * 999);

    const nuevoProducto = { id, nombre: "Nuevo Producto" };

    const response = await request(server)
      .post("/productos")
      .send(nuevoProducto);

    expect(response.body).toContainEqual(nuevoProducto);
  });

  it("Debe tener propiedades obligatorias: {id, nombre}", async () => {
    const response = await request(server).get("/productos/4").send();

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("nombre");
  });

  it("Debe devolver un estado 400 y no permitir id's duplicados", async () => {
    const porductoDuplicado = { id: 1, nombre: "Guantes de boxeo" };

    const response = await request(server)
      .post("/productos")
      .send(porductoDuplicado);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      message: "Ya existe un producto con ese id",
    });
  });
});
