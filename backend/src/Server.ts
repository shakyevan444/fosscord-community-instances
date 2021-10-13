import { Server } from "lambert-server";
import path from "path";
import { createConnection } from "typeorm";
import * as Models from "./entities";

export class CommunityServer extends Server {
	start() {
		// @ts-ignore
		promise = createConnection({
			type: "sqlite",
			database: path.join(process.cwd(), "database.db"),
			entities: Object.values(Models).filter((x) => x.constructor.name !== "Object"),
			synchronize: true,
			logging: false,
			cache: {
				duration: 1000 * 3, // cache all find queries for 3 seconds
			},
			bigNumberStrings: false,
			supportBigNumbers: true,
		});

		return super.start();
	}
}
