import Paragraph from "@components/Styles/Paragraph";
import "./style.less";
const Card = ({ data }) => {
    return (
        <div className="card-carousel">
            <img className="card-carousel__img" src={data.img} alt="nofoto" />

            <div className="card-carousel__description">{data.description}</div>
            <div className="card-carousel__name">{data.nameCart}</div>
            <div className="card-carousel__directions directions">
                {data.directions.map((text, index) => {
                    return (
                        <span className="directions__text" key={index}>
                            {text}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
export default Card;
