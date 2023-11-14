import Close from "@assets/NewAbout/Close.svg"
import "./Snackbar.less"
const Snackbar = ({ children, visibility, onChange }) => {
    return (
        <div className={visibility ? "success" : "success success--none"}>
            <span className="success--text">{children}</span>
            <Close onClick={onChange} />
        </div>
    )
}
export default Snackbar
