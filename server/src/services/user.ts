import e, * as express from 'express';
import { getRepository } from 'typeorm';
import User from '../models/user.entity';


class UserService {
    
    private userRepository;
    constructor(){
        this.userRepository = getRepository(User);
    }
  
    //Create user
    public create = async (body) => {
        const newUser = this.userRepository.create(body);
        console.log(newUser);
        await this.userRepository.save(newUser);
        return ( newUser );
    }

    //Get all users
    public getAll = async () => {
        const users = await this.userRepository.find();
        return ( users );
    }   
}

export default UserService;