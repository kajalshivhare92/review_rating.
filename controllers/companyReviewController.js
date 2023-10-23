const companyReviewSchema = require("../models/companyReviewSchema")

module.exports = {
    createReview: async (req, res) => {
        const reviewData = new companyReviewSchema(req.body);
        try {
            await reviewData.save();
            res.status(201).json({
                success: true,
                message: "Review added successfully",
                review: reviewData,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: `error occur ${error.message}`,
            });
        }
    }
}



