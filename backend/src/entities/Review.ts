import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Instance } from "./Instance";
import { User } from "./User";

export class Review extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	created_at: Date;

	@Column()
	rating: number;

	@Column({ nullable: true })
	comment?: string;

	@ManyToOne(() => User)
	user: User;

	@ManyToOne(() => Instance)
	instance: Instance;
}
