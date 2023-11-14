import "./style.less";
const FormBtn = ({ children, error }) => {
    return (
        <div className="custom-btn">
            <button
                className={
                    error
                        ? "custom-btn__btn custom-btn__btn--error"
                        : "custom-btn__btn"
                }
            >
                {children}
            </button>
            <div className="custom-btn__error">{error}</div>
        </div>
    );
};
export default FormBtn;
