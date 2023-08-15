const request = require("supertest");
import { server } from "../server";

describe("Endpoint `/hello`", () => {
  test("should respond", async () => {
    server.on("listening", () => {
      global.agent = request.agent(server);
    });
    const res = await request(server).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello to you too!");
    server.close();
  });
});
