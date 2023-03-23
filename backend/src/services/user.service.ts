class UserService {
  public async listUsers() {
    return [
      {
        id: 1,
        name: "jon",
        email: "jon@gmail.com",
      },
    ];
  }
}
export default UserService;
