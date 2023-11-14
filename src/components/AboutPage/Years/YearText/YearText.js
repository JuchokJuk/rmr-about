import "./YearText.less";
const YearText = (props) => {
    return (
        <div className="year-text">
            <div className="year-text__title">{props.title}</div>
            <div className="year-text__description">{props.children}</div>
        </div>
    );
};
export default YearText;
