
import { AiFillStar } from 'react-icons/ai'

const Feature = ({feature}) => {
    
    return (
        <div className="text-left flex">
            <span className='text-gray-500 pt-1 pr-1'><AiFillStar></AiFillStar></span>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;