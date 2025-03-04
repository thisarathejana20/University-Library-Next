import { Client as workFlowClient } from "@upstash/workflow";
import config from "../config";

export const workFloeClient = new workFlowClient({
  baseUrl: config.env.qstash.qstashUrl,
  token: config.env.qstash.qstashToken,
});
