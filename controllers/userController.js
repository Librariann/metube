import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "join"});
};
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
        //bad request
        res.status(400);
        res.render("join", { pageTitle : "join" });
    }else{
        //TODO: register User
        //TODO: Log User in
        res.redirect(routes.home);
    }
};


export const getLogin = (req, res) => res.render("login", { pageTitle : "login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

//TODO: logout process
export const logout = (req, res) => {
    res.redirect(routes.home);
};
export const userDetail = (req, res) => res.render("userDetail", { pageTitle : userDetail });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle : changePassword });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle : editProfile });

