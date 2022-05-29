import { createHmac } from "crypto";
const SECRET_KEY =
  "13bc64c2e5c9da33adc6b5db2b9da8bb90de4c54c01bdcd4e1e5dd1032248c31";

const hash = (data) => {
  return createHmac("sha256", SECRET_KEY).update(data).digest("hex");
};

const verify = (data, hashedData) => {
  return hash(data) === hashedData;
};

export { hash, verify };
