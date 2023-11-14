import RFooter from "@components/RFooter";
import RHeader from "@components/RHeader";

//страница about
const Layout2 = ({ children }) => {
    const page = "about";
    return (
        <div>
            <RHeader page={page} />
            {children}
            <RFooter></RFooter>
        </div>
    );
};
export default Layout2;
