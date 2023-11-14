export const useParsingBB = (content) => {
  let temp = content;

  if (content &&content.constructor === Array) {
    temp = temp.join('');
  }

  if (content) {
    try {
      let matchResult = temp.match(/\[\p\]|\[\/p\]/g);
  
      let words =
        matchResult && matchResult.length ? temp.match(/\[p\](.*?)\[\/p\]/g) : [];
  
      words.map((word) => {
        temp = temp.replace(
          word,
          `<b>${word.replace(/\[\/?(?:p).*?\]/g, "")}</b>`
        );
      });
    } catch(e){
      // console.log(e)
      temp = '01'
    }
  }
  
  return temp;
};
