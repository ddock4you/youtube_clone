const getJoin = (req, res) => res.render("join");
const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 },
    } = req;
    console.log(req.body);

    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "join" });
    } else {
        res.redirect("/");
    }
};
const getLogin = (req, res) => res.render("login");
const postLogin = (req, res) => {
    res.redirect("/");
};

const logout = (req, res) => {
    res.redirect("/");
};
const userDetail = (req, res) => res.render("userDetail");
const editProfile = (req, res) => res.render("editProfile");
const changePassword = (req, res) => res.render("changePassword");

module.exports = {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    userDetail,
    editProfile,
    changePassword,
};
