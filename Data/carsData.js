const carsData = [
  // --- MARUTI SUZUKI ---
  {
    name: "Swift",
    brand: "Maruti Suzuki",
    price: 649000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Swift AMT",
    brand: "Maruti Suzuki",
    price: 750000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Swift CNG",
    brand: "Maruti Suzuki",
    price: 820000,
    bodyType: "Hatchback",
    fuelType: "CNG",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Baleno Delta",
    brand: "Maruti Suzuki",
    price: 750000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=400&h=300&fit=crop",
  },
  {
    name: "Baleno Alpha AT",
    brand: "Maruti Suzuki",
    price: 980000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=400&h=300&fit=crop",
  },
  {
    name: "Baleno CNG",
    brand: "Maruti Suzuki",
    price: 840000,
    bodyType: "Hatchback",
    fuelType: "CNG",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=400&h=300&fit=crop",
  },
  {
    name: "Dzire LXI",
    brand: "Maruti Suzuki",
    price: 670000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "Dzire ZXI AT",
    brand: "Maruti Suzuki",
    price: 930000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "Dzire CNG",
    brand: "Maruti Suzuki",
    price: 850000,
    bodyType: "Sedan",
    fuelType: "CNG",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "Brezza LXI",
    brand: "Maruti Suzuki",
    price: 840000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Brezza ZXI AT",
    brand: "Maruti Suzuki",
    price: 1250000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Brezza CNG",
    brand: "Maruti Suzuki",
    price: 960000,
    bodyType: "SUV",
    fuelType: "CNG",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Ertiga LXI",
    brand: "Maruti Suzuki",
    price: 870000,
    bodyType: "MUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1590362891990-f8001e4e3807?w=400&h=300&fit=crop",
  },
  {
    name: "Ertiga ZXI AT",
    brand: "Maruti Suzuki",
    price: 1230000,
    bodyType: "MUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1590362891990-f8001e4e3807?w=400&h=300&fit=crop",
  },
  {
    name: "Ertiga CNG",
    brand: "Maruti Suzuki",
    price: 1080000,
    bodyType: "MUV",
    fuelType: "CNG",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1590362891990-f8001e4e3807?w=400&h=300&fit=crop",
  },
  {
    name: "Grand Vitara Sigma",
    brand: "Maruti Suzuki",
    price: 1090000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Grand Vitara Alpha AT",
    brand: "Maruti Suzuki",
    price: 1700000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Grand Vitara Hybrid",
    brand: "Maruti Suzuki",
    price: 1980000,
    bodyType: "SUV",
    fuelType: "Hybrid",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Fronx Delta",
    brand: "Maruti Suzuki",
    price: 840000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Fronx Turbo AT",
    brand: "Maruti Suzuki",
    price: 1200000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },

  // --- TATA MOTORS ---
  {
    name: "Nexon Smart",
    brand: "Tata",
    price: 810000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606576501962-2f0e94fa0c84?w=400&h=300&fit=crop",
  },
  {
    name: "Nexon Creative DCA",
    brand: "Tata",
    price: 1230000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606576501962-2f0e94fa0c84?w=400&h=300&fit=crop",
  },
  {
    name: "Nexon XM Diesel",
    brand: "Tata",
    price: 1120000,
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606576501962-2f0e94fa0c84?w=400&h=300&fit=crop",
  },
  {
    name: "Nexon EV Creative",
    brand: "Tata",
    price: 1480000,
    bodyType: "SUV",
    fuelType: "Electric",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606576501962-2f0e94fa0c84?w=400&h=300&fit=crop",
  },
  {
    name: "Punch Pure",
    brand: "Tata",
    price: 613000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Punch Accomplished AMT",
    brand: "Tata",
    price: 800000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Tiago XE",
    brand: "Tata",
    price: 565000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Tiago XTA AMT",
    brand: "Tata",
    price: 695000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Tigor XE",
    brand: "Tata",
    price: 630000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "Altroz XE",
    brand: "Tata",
    price: 665000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Curvv EV Creative",
    brand: "Tata",
    price: 1750000,
    bodyType: "SUV",
    fuelType: "Electric",
    transmission: "Automatic",
    image:
      "https://images.unsplash.com/photo-1606576501962-2f0e94fa0c84?w=400&h=300&fit=crop",
  },

  // --- MAHINDRA ---
  {
    name: "Thar AX Opt Soft Top",
    brand: "Mahindra",
    price: 1135000,
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "XUV700 MX Petrol",
    brand: "Mahindra",
    price: 1399000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "XUV3XO MX1 Petrol",
    brand: "Mahindra",
    price: 749000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Scorpio N Z2 Petrol",
    brand: "Mahindra",
    price: 1380000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Bolero B4",
    brand: "Mahindra",
    price: 990000,
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },

  // --- HYUNDAI ---
  {
    name: "Creta E Petrol",
    brand: "Hyundai",
    price: 1100000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Venue E",
    brand: "Hyundai",
    price: 795000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "i20 Magna",
    brand: "Hyundai",
    price: 705000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Verna EX Petrol MT",
    brand: "Hyundai",
    price: 1100000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },

  // --- KIA ---
  {
    name: "Seltos HTE Petrol",
    brand: "Kia",
    price: 1090000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Sonet HTE Petrol",
    brand: "Kia",
    price: 800000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    name: "Carens Premium Petrol MT",
    brand: "Kia",
    price: 1050000,
    bodyType: "MUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1590362891990-f8001e4e3807?w=400&h=300&fit=crop",
  },

  // --- TOYOTA ---
  {
    name: "Glanza E MT",
    brand: "Toyota",
    price: 685000,
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
  },
  {
    name: "Urban Cruiser Hyryder E",
    brand: "Toyota",
    price: 1115000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },
  {
    name: "Innova Crysta GX Diesel",
    brand: "Toyota",
    price: 1999000,
    bodyType: "MUV",
    fuelType: "Diesel",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1590362891990-f8001e4e3807?w=400&h=300&fit=crop",
  },
  {
    name: "Fortuner 4x2 Petrol MT",
    brand: "Toyota",
    price: 3340000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1606611013016-969c19f27081?w=400&h=300&fit=crop",
  },

  // --- HONDA ---
  {
    name: "Amaze E MT",
    brand: "Honda",
    price: 720000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "City SV MT",
    brand: "Honda",
    price: 1080000,
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1608339747319-f05da8b8a4aa?w=400&h=300&fit=crop",
  },
  {
    name: "WR-V S",
    brand: "Honda",
    price: 835000,
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
];

module.exports = carsData;
