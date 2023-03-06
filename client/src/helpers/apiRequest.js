import axios from "axios";
import { getEnvVariables } from "./getEnvVariables";

const { BACK_SERVER } = getEnvVariables()

export const apiRequest = axios.create({
  baseURL: BACK_SERVER
})


