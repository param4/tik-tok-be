import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  profilePic: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column({ nullable: true })
  verificationCode: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: true })
  isActive: boolean;
}
