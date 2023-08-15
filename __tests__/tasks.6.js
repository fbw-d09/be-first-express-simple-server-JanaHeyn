const request = require("supertest");
import { server } from "../server";

describe("Endpoint `/fact`", () => {
  test("should respond", async () => {
    server.on("listening", () => {
      global.agent = request.agent(server);
    });
    const res = await request(server).get("/fact");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("JavaScript was created in about 10 days!");
    server.close();
  });
});
