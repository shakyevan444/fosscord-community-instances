import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Category extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;
}
