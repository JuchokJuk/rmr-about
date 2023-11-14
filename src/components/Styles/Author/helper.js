export const getAuthorPictureSizeClass = (size) => {
    let clSize = null

    switch(size) {
        case "medium":
            clSize = 'author__image_size_medium'
        break;
        
        default: 
            clSize = 'author__image_size_large'
    }

    return clSize
}