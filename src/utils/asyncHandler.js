const asyncHandler=(fn)=>{
    (req,res,next)=>{
        Promise
        .resolve(fn(req,res,next))
        .catch((err)=>{
           next(err)
        })
    }
} 


export {asyncHandler}


//this for trying thing in try and catch block
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req,res,next)
//     }catch(err){
//         console.log(err)
//         res.status(500).json({message: "Internal server error"})
//     }
// }