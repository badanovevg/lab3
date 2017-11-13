export class User{
   constructor(public id: number,
                public name: string,
                public surname: string,
                public patronymic: string,
                public position: string,
                public calendar: Date,
                public address: string,
                public phone: number,
                public email: string, 
                public salary: number)
    { }
}