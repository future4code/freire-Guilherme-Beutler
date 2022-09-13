export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export type AuthenticationData = {
   id: string
   role: string
}

export enum ROLE_TYPE {
   ADMIN = 'ADMIN',
   NORMAL = 'NORMAL'
}