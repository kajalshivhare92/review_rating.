// Authorization middleware
function authorizeAdmin(req, res, next) {
    if (req.user && req.user.userRole === 'admin') {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: "You are not eligible for this!",
        });
    }
}

// IsUser = async (req, res, next) => {
//     if (req.user && req.user.userRole === 'user') {
//         next();
//     } else {
//         res.send({
//             success: false,
//             message: "You are not authorize user"
//         });
//     }
// }

module.exports = {
    authorizeAdmin,
}

