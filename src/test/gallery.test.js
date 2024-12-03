import { expect } from "chai";
import dotenv from "dotenv"
import supertest from "supertest";

dotenv.config()
const path = supertest(`http://127.0.0.1:${process.env.PORT}`);

describe("Testeo endpoints Usuario", () => {
  it("GET Usuarios", async () => {
    const response = await path.get("/usuario");
    expect(response.status).to.eq(200);
  });

  it("DELETE Usuario con ID Erróneo", async () => {
    const response = await path.delete("/usuario/abc")
    expect(response.status).to.eq(200)
  })
});

describe("Testeo endpoints Obras", () => {
  it("GET Obras", async () => {
    const response = await path.get("/obra")
    expect(response.status).to.eq(200)
  })
})

describe("Testeo endpoints Colecciones", () => {
  it("GET Colecciones", async () => {
    const response = await path.get("/coleccion")
    expect(response.status).to.eq(200)
  })
})
