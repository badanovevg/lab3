import {User} from './user';

export class UserService{
    
   private data: User[] = [
       {id: 1, name: "Евгений", surname: "Баданов",patronymic: "Александрович",position: "Админ",calendar: "2017-11-21",address: "Полоцк",phone: 2926314,email: "badanov@gmail.com",salary: 500},
           ];
    getData(): User[] {
         
        return this.data;
    }
    
    addData(id: number, name: string,surname: string,patronymic: string,position: string,calendar: Date,address: string,phone: number,email: string,salary: number){
         
        this.data.push(new User(id,name,surname,patronymic,position,calendar,address,phone,email,salary));
    }

}
