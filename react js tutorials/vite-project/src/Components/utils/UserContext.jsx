import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Anurag singh Rawat",
    email: "anuragrwt6846@gmail.com",
  },
});

export default UserContext;
