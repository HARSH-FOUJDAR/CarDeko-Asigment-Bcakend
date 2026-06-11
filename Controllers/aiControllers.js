const Car = require("../models/Car");

exports.getRecommendation = async (req, res) => {
  try {
    const { budget, fuelType } = req.body;

    let filter = {};

    if (fuelType) {
      filter.fuelType = fuelType;
    }

    const cars = await Car.find(filter).limit(3);

    let recommendation = `
Recommended Cars:

${cars.map((car, index) => `${index + 1}. ${car.name}`).join("\n")}

Why These Cars?

• Match your selected fuel type
• Good value for money
• Popular among Indian buyers
• Suitable for family and city usage
`;

    res.status(200).json({
      success: true,
      recommendation,
      cars,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error generating recommendation",
    });
  }
};
