export interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    passwordHash:string;
    passwordSalt:string;
    authority_id:number;
}