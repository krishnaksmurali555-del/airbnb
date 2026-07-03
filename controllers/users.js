const User = require("../models/user");


module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
}


module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}


module.exports.signup=async(req,res)=>{
    try{
         let {username,email,password}=req.body;
    const newUser= new User ({email,username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            returnnext(err);
        }
         req.flash("success", "welcome to Wanderlust");
    res.redirect("/listings");
    })
   
    } catch(er){
        req.flash("error",er.message);
        res.redirect("/signup");
    }
   
}


module.exports.login = async(req,res)=>{
    req.flash("success","Welcome to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You Are Logged Out!");
        res.redirect("/listings");
    })
}

