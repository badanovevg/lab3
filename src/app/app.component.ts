import {TemplateRef, ViewChild} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
       
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
        .col-md-8 {margin: 10px;}
    `],
    providers: [UserService]
})
export class AppComponent implements OnInit { 
    
        //типы шаблонов
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
      
    editedUser: User;
    users: Array<User>;
    isNewRecord: boolean;

      
    constructor(private serv: UserService) {
        this.users = new Array<User>();
    }
      
    ngOnInit() {
        this.loadUsers();
    }
      
    //загрузка пользователей
    private loadUsers() {

        this.users = this.serv.getData();
    }
    
    addUser(id: number,
                name: string,
                surname: string,
                patronymic: string,
                position: string,
                calendar: Date,
                address: string,
                phone: number,
                email: string, 
                salary: number){
         
        this.serv.addData(id,name,surname,patronymic,position,calendar,address,phone,email,salary);
    }
   
    // редактирование пользователя
    editUser(user: User) {
        this.editedUser = new User(user.id,user.name,user.surname,user.patronymic,user.position,user.calendar,user.address,user.phone,user.email,user.salary);
    }
    
    // загружаем один из двух шаблонов
    loadTemplate(user: User) {
        if (this.editedUser && this.editedUser.id == user.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }
    
    // отмена редактирования
    cancel() {
        // если отмена при добавлении, удаляем последнюю запись
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    
    // удаление пользователя

    deleteUser(user: User): void {
        if (user !== undefined && user !== null) {
        let index: number = this.users.indexOf(user, 0);      

        if (index > -1) {
            this.users.splice(index, 1);
        }
        }
    }
    
    
    // сохраняем пользователя

    saveUser(user: User): void{
         
        this.serv.addData(this.editedUser.id,this.editedUser.name,this.editedUser.surname,this.editedUser.patronymic,this.editedUser.position,this.editedUser.calendar,this.editedUser.address,this.editedUser.phone,this.editedUser.email,this.editedUser.salary);
            
        this.editedUser = null;
        
                
        this.users.splice(id, 1);


      
    }

}