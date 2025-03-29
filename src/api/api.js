// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL:
    "http://ec2-13-125-208-179.ap-northeast-2.compute.amazonaws.com:3000", // 🟡 여기에 실제 NestJS API 주소
  withCredentials: true, // 필요 시 쿠키 포함
});

export default api;
