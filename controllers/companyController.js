const companyReviewSchema = require("../models/companyReviewSchema");
const companySchema = require("../models/companySchema")

module.exports = {
    createCompany: async (req, res) => {
        try {
            const newCompany = new companySchema(req.body);
            newCompany.companyName = req.body.companyName
                .trim()
                // ! string ko array me convert kar diya
                .split(" ")
                .map((data) => {
                    return data.charAt(0).toUpperCase() + data.slice(1);
                })
                // dubara string me change kar diya
                .join(" ");
            console.log(newCompany.companyName);
            const checkCompany = await companySchema.findOne({
                companyName: req.body.companyName,
            });
            if (checkCompany != null) {
                //req file? unlinksync(req.file.path): null; //agar same name ka username pic upload karne
                res.status(409).json({
                    success: false,
                    message: `This company already exists`,
                });
            } else {
                const filepath = `/uploads/company${req.file.filenaame}`;
                newCompany.companyPic = filepath;
                const company = await newCompany.save();
                res.status(201).json({
                    success: true,
                    message: "Company created",
                    addedcompany: company,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                mesaage: `Error occur : ${error.message}`,
            })
        }
    },

    companyDetail: async (req, res) => {
        companyID = req.params.id;
        userID = req.params.user;
        try {
            const companyData = await companySchema.findById(req.params.id);
            const reviewDatalist = await companyReviewSchema.find({ companyID: req.params.id })
                .populate({ path: "userID", select: "userName profilepic" });
            res.status(200).json({
                success: true,
                message: "Review list fetched successfully",
                company: companyData,
                reviewlist: reviewDatalist,
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `Review not Found ${error.message}`,
            })
        }
    },

    companyList: async (req, res) => {
        try {
            const showAllCompanies = await companySchema.find(
                // {},
                // { companyName: 1, _id: 0 }
            );
            const totalCompanies = await companySchema.find().count();
            res.status(200).json({
                success: true,
                message: "All companies",
                count: totalCompanies,
                companyList: showAllCompanies,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `Error occur : ${error.message}`,
            });
        }
    },

    SearchCompany: async (req, res) => {
        const companyCity = req.body.companyCity;
        try {
            const companies = await companySchema.find({
                companyCity: { $regex: `^${companyCity}`, $options: "i" },
            });
            console.log(companies);
            if (companies.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "Searched companies",
                    companies: companies,
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: `No company found`,
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `Error occur ${error.message}`,
            });
        }
    },
};


