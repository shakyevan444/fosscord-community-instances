import { BaseEntity, Column, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

export class Instance extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	url: string;

	@Column()
	description: string;

	@Column()
	user_count: number;

	@Column()
	created_at: Date;

	@ManyToOne(() => User)
	user: User;

	@ManyToMany(() => Category)
	@JoinTable()
	categories: Category[];

	@OneToMany(() => require("./Review").Review, (r: any) => r.instance)
	reviews: import("./Review").Review[];
}
