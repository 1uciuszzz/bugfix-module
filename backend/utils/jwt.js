import jsonwebtoken from "jsonwebtoken";

const SECRET_KEY =
  "c8c65bf256bcb272dad49a8f3cf3e65337cdc157a850110859e4f73d30599ded";

const encode = (data) => {
  return jsonwebtoken.sign(data, SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: "1d",
  });
};

const decode = (token) => {
  try {
    return jsonwebtoken.verify(token, SECRET_KEY, {
      algorithms: ["HS256"],
    });
  } catch (err) {
    return false;
  }
};
export { encode, decode };
