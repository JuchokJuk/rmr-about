import './ListItem.less'

const ListItem = (props) => {
    return (
        <div className="item-list">
            <div className="item-list__number pixelated">{props.number}</div>
            <div className="item-list__body">{props.children}</div>
        </div>
    )
}
export default ListItem
