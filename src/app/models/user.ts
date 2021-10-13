export interface User{
    user_id:number;
    first_name:string;
    last_name:string;
    email:string;
    passwordHash:string;
    passwordSalt:string;
    authority_id:number;
}