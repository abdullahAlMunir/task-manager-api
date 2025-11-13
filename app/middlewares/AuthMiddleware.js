import { TokenDecode } from "../utility/TokenUtility.js";

export default(req, res, next) => {


    let token = req.headers["token"];

    // console.log(req.headers.token);

    let decode = TokenDecode(token);
// console.log(decode,"decode")
    if (decode === null) {
        return res.status(200).json({message: "Unauthorized"});
    } else {
        // decode=decode.toObject();
        let email = decode.email;
        let user_id = decode.user_id||decode?._id;
    

        // set the email and user_id in header.
        req.headers.email = email;
        req.headers.user_id = user_id;

        next();
    }
    
}