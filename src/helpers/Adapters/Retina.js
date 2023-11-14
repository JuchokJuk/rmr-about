// Convert Object to Array
const groupImagesArray = (formats) => {
  let keys = Object.keys(formats);

  return keys.map(key => {
    return {
      type: key,
      width: formats[key].width,
      url:  formats[key].urlCDN || formats[key].url
    }
  });
};

// Find closest width to block
const getClosest = (imageArr, target) => {
  return imageArr.reduce(function (prev, curr) {
    return Math.abs(curr.width - target) < Math.abs(prev.width - target)
      ? curr
      : prev;
  })
}

const defaultObject = (options) => ({
  defaultUrl: options.default.url,
  srcSet: `${options.default.url} 1x, ${options.default.url} 2x`
})

const computeObject = (options, imagesArr) => ({
  defaultUrl: options.isRetina ? getClosest(imagesArr, options.target * 2).url : getClosest(imagesArr, options.target).url,
  srcSet: `${getClosest(imagesArr, options.target).url} 1x, ${getClosest(imagesArr, options.target * 2).url} 2x`
})

const choiseBlock = (type, options, imagesArr) => {

  if (type === 'card' || type === "photo") {
    let result = getClosest(imagesArr, options.target)
    return result.type === 'thumbnail' ? defaultObject(options) : computeObject(options, imagesArr);
  } else {
    return computeObject(options, imagesArr);
  }
}

export const getImageMetaResolution = (options) => {


  if (options.formats && options.target) {
    options.formats.default = {
      ...options.default
    }

    const imagesArr = groupImagesArray(options.formats);
    return choiseBlock(options.type, options, imagesArr)
  } 
  else if (options.default.url) {
    return defaultObject(options)
  } else {
    return {
      defaultUrl: '',
      srcSet: ''
    }
  }
};
