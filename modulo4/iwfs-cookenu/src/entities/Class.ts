
export class User {

 constructor(
     private id:string, 
     private name:string, 
     private email:string, 
     private password:string
     ){}

     static toUserModel(data:any):User{
         return new User(data.id, data.name, data.email, data.password)
     }


     getId(){
         return this.id
     }
     getName(){
         return this.name
     }
     getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
}

export class Recipie {
    constructor(
        private id:string,
        private criador_id:string,
        private titulo:string,
        private descricao:string, 
        private data: Date
        
    ){}
    static toUserModel(data: any): Recipie {
        return new Recipie(data.id, data.criador_id, data.titulo, data.descricao, data.data)
    }
    getId(){
        return this.id
    }
    getCreator(){
        return this.criador_id
    }
    getTitle(){
        return this.titulo
    }
    getDescription(){
        return this.descricao
    }

    getDate(){
        return this.data
    }
}