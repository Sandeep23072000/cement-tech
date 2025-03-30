const addresses = [
  [
    "Sales and marketing office",
    "301, 3rd Floor,",
    "Casa Feliz,",
    "Mahalunge Baner,",
    "Pune, MAHARASHTRA PIN-411045",
  ],
  [
    "Developement centre office",
    "120",
    "2nd main",
    "Doctors Layout",
    "Naganathpura",
    "Electronic City",
    "Bengaluru Karnataka 560100",
  ],
  [
    "Central Office Address",
    "HN170, Shyam Nagar, Bhilwara,",
    "Rajasthan 311001",
  ],
];

const Address = () => {
  return (
    <div className="flex justify-between flex-wrap sm:gap-2 gap-4">
      {addresses.map((address, index) => (
        <div key={index} className="text-gray-400">
          <p style={{ fontWeight: "700" }}>{address[0]}</p>
          {address.slice(1).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Address;
