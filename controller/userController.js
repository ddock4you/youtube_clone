import routes from "../routes";


// global
export const getJoin = (req, res) => {
    res.render('join', {pageTitle: 'Join'})
};

export const postJoin = (req, res) => {
    console.log(req.body);
    const  {
        body: {
            name, email, password, password2
        }
    } = req;
    if (password !== password2) {
        
        res.status(400);
    } else {
        // To Do : Register User
        // To Do Log : Log user
        res.redirect(routes.home);
    }



    res.render('join', {pageTitle: 'Join'})
};


export const getLogin = (req, res) => {
    res.render('login', {pageTitle: 'Login'})
};

export const postLogin = (req, res) => {
   res.redirect(routes.home);
};




export const logout = (req, res) => {
    // res.render('logout', {pageTitle: 'Logout'})
    res.redirect(routes.home);
};

// users
export const users = (req, res) => res.render('users', {pageTitle: 'User'});
export const editProfile = (req, res) => res.render('editProfile', {pageTitle: 'Edit Profile'});
export const changePassword = (req, res) => res.render('changePassword', {pageTitle: 'Change Password'});
export const userDetail = (req, res) => res.render('userDetail', {pageTitle: 'User Detail'});