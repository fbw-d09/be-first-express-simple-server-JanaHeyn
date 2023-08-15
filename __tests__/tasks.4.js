const request = require("supertest");
import { server } from "../server";

describe("Endpoint `/time`", () => {
  test("should respond with time string in ISO format", async () => {
    const res = await request(server).get("/time");
    expect(res.text).not.toBe("");
    server.close();
  });
});
