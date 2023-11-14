const isStatic = (params) => {
    switch(params.tag) {
        case "_next": 
            return true
        case "fonts":
            return true
        case "__nextjs_original-stack-frame":
            return true
        case "sw.js":
            return true
        case "favicon.ico":
            return true
        default: 
            return false
    }
}

module.exports = {
    isStatic,
}