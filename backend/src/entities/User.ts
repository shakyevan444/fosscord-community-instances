import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	avatar: string;

	@Column()
	created_at: Date;

	@Column()
	access_token: string;

	@Column()
	refresh_token: string;
}
