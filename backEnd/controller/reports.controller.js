let OrderModel = require('../model/orders.model');

exports.getreportsByDates = (req, res) => {
	let { startDate, endDate } = req.body;
	OrderModel.find(
		{
			date_Ordered: {
				$gte: startDate,
				$lte: endDate
			}
		},
		(err, result) => {
			if (!err) {
				return res.status(200).json(result);
			}
		}
	);
};
