const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  try {
    const { budget, brand, fuelType, transmission, bodyType } = req.query;

    let filter = {};

    if (brand) {
      filter.brand = brand;
    }

    if (fuelType) {
      filter.fuelType = fuelType;
    }

    if (transmission) {
      filter.transmission = transmission;
    }

    if (bodyType) {
      filter.bodyType = bodyType;
    }

    // Budget Filter
    if (budget) {
      const [min, max] = budget.split("-").map(Number);

      filter.price = {
        $gte: min * 100000,
        $lte: max * 100000,
      };
    }

    const cars = await Car.find(filter);

    res.status(200).json({
      success: true,
      count: cars.length,
      cars,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
