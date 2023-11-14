import { useBreakpoint } from "@helpers/useBreakpoint";
import "./style.less";

const Table = () => {
    const breakpoint = useBreakpoint();
    const maxXl = breakpoint === "max" ? <br /> : "";
    const xl = breakpoint === 0 ? <br /> : "";
    const lg = breakpoint === 1 ? <br /> : "";
    const md = breakpoint === 2 ? <br /> : "";
    const sm = breakpoint >= 3 ? <br /> : "";
    return (
        <div className="table">
            <h1 className="table__header table__header_indented">
                Создаём 
                <span className="table__header_red-pixelated">
                    цифровые продукты&nbsp;
                </span>
                {maxXl}
                {xl}
                {md}
                {lg}с нуля
                {sm} и развиваем существующие
            </h1>

            <div className="table__content">
                <div className="table__subheader">
                    <p>В каких ситуациях {md} к нам обращаются:</p>
                </div>

                <div className="table__rows">
                    <div className="table__row table__row_indented">
                        <div className="table__cell">
                            <div className="table__cell__header">Проблема</div>
                            <div className="table__cell__text">
                                Существующий продукт {lg}
                                {md} не оправдывает ожиданий.
                            </div>
                        </div>

                        <div className="table__cell">
                            <div className="table__cell__header">
                                Наше решение
                            </div>
                            <div className="table__cell__text">
                                Перезапускаем продукт {lg} или помогаем принять
                                осознанное решение {xl}
                                {md}
                                {sm} о его закрытии.
                            </div>
                        </div>
                    </div>

                    <div className="table__row table__row_indented">
                        <div className="table__cell">
                            <div className="table__cell__header table__cell__header--bottom">
                                Проблема
                            </div>
                            <div className="table__cell__text">
                                Нужно выйти на новый рынок {xl}
                                {lg} или привлечь новую аудиторию.
                            </div>
                        </div>

                        <div className="table__cell">
                            <div className="table__cell__header table__cell__header--bottom">
                                Наше решение
                            </div>
                            <div className="table__cell__text">
                                Переосмысляем существующий продукт {maxXl}
                                {sm} или создаём принципиально новый.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
