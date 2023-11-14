import RFooter from "@components/RFooter";
import RHeader from "@components/RHeader";
import "./style.less";

// страница контактов
const Layout3 = ({ children }) => {
    return (
        <div className="layout3">
            <RHeader />
            {children}
            <RFooter></RFooter>
        </div>
    );
};
export default Layout3;
