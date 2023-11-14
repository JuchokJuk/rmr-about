import "./style.less";

const Layout = (props) => {
    return (
        <div className={
            props.verticalCentered
                ? "width-control-wrapper vertical-centered"
                : "width-control-wrapper"
        }>
            <div className="width-control">
                {props.children}
            </div>


        </div>
    );
};
export default Layout;
