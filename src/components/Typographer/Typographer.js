import Typograf from "typograf";
import { renderToString } from 'react-dom/server';
import Parser from 'html-react-parser';

const Typographer = (props) => {

    let tp = new Typograf({ locale: ['ru', 'en-US'] });
    tp.enableRule('ru/optalign/*'); // Включить висячую пунктуацию

    const propsChildrenAsString = renderToString(props.children) // convert props.children to string
    const result = tp.execute(propsChildrenAsString);

    return (
        Parser(result)
    );
};

export default Typographer;
