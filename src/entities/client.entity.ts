import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("clients")
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_client: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  surename: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: string;
}
