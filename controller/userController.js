import passport from 'passport';
import routes from "../routes";
import User from '../models/User';

export const getJoin = (req, res) => {
    res.render('join', {pageTitle: 'join'});
}

export const postJoin = async (req, res, next) => {
    console.log(req.body);
    const {
        body: {name, email, password, password2}
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render('join', {pageTitle: 'join'});
    } else {
        try {
            const user = await User ({
                name, email
            });
            await User.register(user, password);
            next();
        } catch(error) {
            console.log(error);
            res.redirect(routes.home);

        }
    }
    
}


export const getLogin = (req, res) => {
    res.render('login', {pageTitle: 'login'});
}

export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const githubLogin = passport.authenticate('github');

// callback 할 때 회원가입 또는 로그인 하려는 깃허브 아이디의 이메일을 공개여부가
// private로 되어 있거나 이메일이 입력되어 있지 않을 경우 passport에서
// failed to serialize user into session 에러 뜨면서 안됨.

// 회원가입에서 email을 가입에 필요한 기본정보로 설정했는데 깃허브에서 이메일을 받아올 수 없기 때문에
// 생긴 에러
export const githubLoginCallback = async (_, __, profile, cb) => {
    // console.log(accessToken, refreshToken, profile, cb);
    const {
        _json: {id, avatar_url:avatarUrl, name, email}
    } = profile;
    console.log(avatarUrl);
    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id,
            user.save();
            return cb(null, user);
        }
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl 
        });
        return cb(null, newUser);
    } catch (error) {
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
}

export const getMe = (req, res) => {
    res.render('userDetail', {pageTitle: 'logout', user: req.user});
};

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
    // res.render('logout', {pageTitle: 'logout'});

}
export const users = (req, res) => res.render('users', {pageTitle: 'users'});
export const userDetail = (req, res) => res.render('userDetail', {pageTitle: 'userDetail'});
export const editProfile = (req, res) => res.render('editProfile', {pageTitle: 'editProfile'});
export const changePassword = (req, res) => res.render('changePassword', {pageTitle: 'changePassword'});