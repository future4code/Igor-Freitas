export type AuthenticationData = {
    id:string
    role: USER_ROLES
 }

 export enum USER_ROLES {
     ADMIN = 'ADMIN',
     NORMAL = 'NORMAL'
 }