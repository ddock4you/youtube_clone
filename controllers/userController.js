const join = (req, res) => res.render("join");
const login = (req, res) => res.render("login");
const logout = (req, res) => res.render("logout");
const userDetail = (req, res) => res.render("userDetail");
const editProfile = (req, res) => res.render("editProfile");
const changePassword = (req, res) => res.render("changePassword");

module.exports = {
    join,
    login,
    logout,
    userDetail,
    editProfile,
    changePassword,
};
