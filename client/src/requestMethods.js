import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU2NzVmMmE1MTNiZWFhYTZmMDcwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxNzM5NywiZXhwIjoxNjQxOTc2NTk3fQ.NU7s4GmPlD-cLVgBKtYthOOn_7tvRnN0zytnMPal8ME";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
