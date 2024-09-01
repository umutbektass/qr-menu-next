export class Result{
   
    constructor(success,message,data){
       
        this.success = success,
        this.message = message
        if(data !==undefined){
            this.data =data
        }
    
    }

    static successResult(message,data){
        return new Result(true,message,data)
    }
    static errorResult(message){
        return new Result(false,message)
    }
    toPlainObject() {
        return {
          success: this.success,
          message: this.message,
          data: this.data,
        };
    }
}