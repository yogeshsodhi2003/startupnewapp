declare module "next-auth"{
    interface Session {
        id:string,
        name:string,
        email:string,
    }
    interface jwt {
        id:string
    }
}