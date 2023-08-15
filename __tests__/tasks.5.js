const request = require("supertest");
import { server } from "../server";

describe("Endpoint `/random`", () => {
  test("should respond with number", async () => {
    const res = await request(server).get("/random");
    expect(res.text).toMatch(/[0-9]/);
    server.close();
  });
});
