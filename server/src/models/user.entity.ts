import { Column, Entity,ManyToMany,JoinTable, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public lastname: string;

  @Column()
  public adress: string;

  @Column()
  public phoneNumbers: string;
}
 
export default User;