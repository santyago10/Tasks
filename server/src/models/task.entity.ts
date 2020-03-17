import { Column, Entity,ManyToMany,JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import User from './user.entity';
 
@Entity()
class Task {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public description: string;

  @ManyToOne( () => User, (user: User) => user.adress)
  public clientAdress: User;

  @Column()
  public startTime: string;

  @Column()
  public endTime: string;
}
 
export default Task;