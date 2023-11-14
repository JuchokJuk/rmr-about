import './style.less';

const IconButton = (props) =>{
    return (
        <div className="icon-button" onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default IconButton;