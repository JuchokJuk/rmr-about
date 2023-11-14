import { useBreakpoint } from "@helpers/useBreakpoint";
import Table from "./Table";
import Layout from "@components/Layouts/Layout";
import "./style.less";

const DigitalProducts = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    return (
        <Layout>
            <Table />
            <div className="digital-products__text digital-products__text_indented">
                <div className="heading h3_c">
                    Практикуем <span className="red">продуктовый подход</span>
                    {md} и знаем, {lg}{sm} как развивать цифровой сервис на любой
                    стадии {md}{sm} его существования.
                </div>
                <div className="digital-products__text__p digital-products__text__p_indented">
                    Чтобы опередить время, нужно {sm} без остановки двигаться вперёд.
                    Постоянно генерировать новые идеи, придумывать, {maxXl}{sm}
                    как быстро {md} и недорого протестировать гипотезы, и иметь
                    смелость вовремя отбросить неподтвердившиеся.
                </div>
            </div>
        </Layout>
    );
};
export default DigitalProducts;
