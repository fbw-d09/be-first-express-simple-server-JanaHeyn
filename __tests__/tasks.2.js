import { server } from "../server";

describe("app", () => {
  it("should be express instance", (done) => {
    expect(server.constructor.name).toBe("Server");
    server.close();
    done();
  });
});
