import PriceOption from "./PriceOption";

const PriceOptions = () => {


 
        
        const price_options = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Unlimited access during off-peak hours",
              "Locker room access",
              "Fitness assessment"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to all equipment and classes",
              "24/7 access",
              "Personal training session",
              "Nutritional consultation",
              "Access to sauna and spa"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": 89.99,
            "features": [
              "Access for up to 4 family members",
              "Access to all equipment and classes",
              "Childcare services",
              "Discounts on additional services",
              "Family fitness classes"
            ]
          }
        ]
      

    return (
        <div className="mx-14">
        <h1 className="text-5xl">Price of the services</h1>
          <div className="grid grid-cols-3 gap-6">
            {
                price_options.map(option => <PriceOption key={option.id} option={option}></PriceOption>) 
            }
        </div>
        </div>
      
    );
};

export default PriceOptions;