class apiError extends Error{
    constructor(statusCode, message="something went wrong",error=[],statck=""){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.error=error
        this.message=message
        this.success=false

        if(satck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default {apiError}