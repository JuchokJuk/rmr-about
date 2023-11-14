
const getSizeCl = (sizeCard) => {

    const clSizeCard = {};

    switch (sizeCard) {
        case 1:
            clSizeCard.cl = 'base-card_size_one'
            clSizeCard.targets = [450, 352, 328, 328, 328]
            break;
        case 2:
            clSizeCard.cl = 'base-card_size_two'
            clSizeCard.targets = [576, 576, 312, 328, 328]
            break;

        case 3:
            clSizeCard.cl = 'base-card_size_three'
            clSizeCard.targets = [800, 568, 432, 328, 328]
            break;
        case 4:
            clSizeCard.cl = 'base-card_size_four'
            clSizeCard.targets = [1248, 888, 672, 328, 328]
            break;

        default:
            clSizeCard.cl = 'base-card_size_one'
            clSizeCard.targets = [450, 352, 328, 328, 328]
    }

    return clSizeCard;
}

const getHeadingTag = (sizeHeading, Component) => {

    let HeadingTag = '';

    switch (sizeHeading) {
        case 1:
            HeadingTag = Component.HA1
            break;
        case 2:
            HeadingTag = Component.HA2
            break;

        case 3:
            HeadingTag = Component.HA3
            break;

        default:
            HeadingTag = Component.HA3
    }

    return HeadingTag
}


const options = {
    getSizeCl,
    getHeadingTag,
}

export default options;