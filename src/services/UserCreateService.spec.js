const UserCreateService = require("./UserCreateService");

it("user should be created", () => {
  const user = {
    name: "User Test",
    email: "user@test.com",
    password: "123",
  };

  const UserCreateService = new UserCreateService();
  const userCreated = userCreateService.execute(user);

  expect(userCreated).toHaveProperty("id");
});
