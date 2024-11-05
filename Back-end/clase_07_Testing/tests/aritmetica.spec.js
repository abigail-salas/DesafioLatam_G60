const sumar = (a, b) => a + b;

describe("Operaciones Aritmeticas", () => {
  it("Debe sumar correctamente dos números", () => {
    const resultado = sumar(10, 10);

    expect(resultado).toBe(20);
  });
});
