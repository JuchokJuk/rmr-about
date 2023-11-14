import "./style.less";

const Wrapper = (props) => {
    return (
        <div className="width-control-wrapper">
            <div
                className={
                    props.verticalCentered
                        ? "width-control vertical-centered"
                        : "width-control"
                }
            >
                {props.children}
            </div>


        </div>
    );
};
export default Wrapper;
