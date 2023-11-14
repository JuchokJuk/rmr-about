import Typographer from '@components/Typographer/Typographer'
import './style.less'

const P1Short = (props) => {
    return (
        <p className='P1-short'>
            <Typographer>{props.children}</Typographer>
        </p>
    );
}

const P1Long = (props) => {
    return (
        <p className="P1-long">
            <Typographer>{props.children}</Typographer>
        </p>
    );
}

const P1LongUnderline = (props) => {
    return (
        <p className='P1-long-underline'>
            <Typographer>{props.children}</Typographer>
        </p>
    );
}

export { P1Short, P1Long, P1LongUnderline }
