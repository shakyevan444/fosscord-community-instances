import { config } from "dotenv";
import { CommunityServer } from "./Server";
config();

const server = new CommunityServer({ port: Number(process.env.PORT) || 3006 });
server.start();
