import Feature from "../feature/feature";
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {

    const {name, price, features} = option;
    return (
        <div className="flex flex-col bg-amber-500 rounded text-white p-4 text-center my-5">
            <h2>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl py-5">{name}</h4>
            <div className="flex-grow ">
                {
                    features.map((feature,idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
                       
            <button className="w-full py-3 bg-lime-400 rounded my-5 font-bold hover:bg-yellow-400 hover:text-black">Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
    

}

export default PriceOption;