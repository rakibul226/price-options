import feature from "../feature/feature";

const PriceOption = ({option}) => {

    const {name, price, features} = option;
    return (
        <div className="bg-amber-300 rounded text-white p-4 text-center">
            <h2>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl pt-2">{name}</h4>
            {
                features.map(feature => <feature  feature={feature}></feature>)
            }
            
        </div>
    );
};

export default PriceOption;