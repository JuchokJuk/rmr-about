


import { useBreakpoint } from '@helpers/useBreakpoint';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { useState, useRef } from 'react';
import './style.less';

const Columns = (props) => {

    /*
 
    Example:
 
    <Layout>
        <Columns adaptive={{
            b375: [2],
            b768: [12],
            b1024: [5, ".", 6],
            b1366: [5, ".", 6],
            b2300: [5, ".", 6]
        }}>

            <div>
                <div style={{ 'background': 'yellow', 'width': '100%', 'height': '150px' }}> main content</div>
                <Columns adaptive={{
                    b375: [2],
                    b768: [6, 6],
                    b1024: [5],
                    b1366: [5],
                    b2300: [5]
                }}>

                    <div style={{ 'background': 'red', 'width': '100%', 'height': '20px' }}>link 1</div>
                    <div style={{ 'background': 'blue', 'width': '100%', 'height': '20px' }}>link 2</div>

                </Columns>
            </div>

            <Columns adaptive={{
                b375: [2],
                b768: [6],
                b1024: [6],
                b1366: [6],
                b2300: [6]
            }}>
                <div style={{ 'background': 'pink', 'width': '100%', 'height': '20px' }}>contacts header</div>
                <Columns adaptive={{
                    b375: [2],
                    b768: [6, 6],
                    b1024: [3, 3],
                    b1366: [3, 3],
                    b2300: [3, 3]
                }}>
                    <div style={{ 'background': 'green', 'width': '100%', 'height': '100px' }}>contact</div>
                    <div style={{ 'background': 'yellowgreen', 'width': '100%', 'height': '100px' }}>contact</div>
                    <div style={{ 'background': 'green', 'width': '100%', 'height': '100px' }}>contact</div>
                    <div style={{ 'background': 'yellowgreen', 'width': '100%', 'height': '100px' }}>contact</div>
                </Columns>
            </Columns>

        </Columns>
    </Layout>
 
    */

    const breakpoint = useBreakpoint();
    const grid = useRef();

    const [width, setWidth] = useState();
    const [columnsCount, setColumnsCount] = useState();

    function getDesign(breakpoint) {
        switch (breakpoint) {
            case "max":
                return 'b2300'
            case 0:
                return 'b1366'
            case 1:
                return 'b1024'
            case 2:
                return 'b768'
            case 3:
                return 'b375'
            case 4:
                return 'b375'
        }
    }

    useDidUpdateEffect(() => {

        let design = getDesign(breakpoint);
        let columnsConfig = props.adaptive[design];

        let columnGap;
        let columnWidth;

        switch (design) {
            case 'b2300':
                columnGap = 32;
                columnWidth = 109.333;
                break;
            case 'b1366':
                columnGap = 16;
                columnWidth = 75.833;
                break;
            case 'b1024':
                columnGap = 20;
                columnWidth = 50.333;
                break;
            case 'b768':
                columnGap = 20;
                columnWidth = 35.666;
                break;
            case 'b375':
                columnGap = 24;
                columnWidth = 152;
                break;
        }

        const children = Array.from(grid.current.children)

        function getStart(i) {
            let start = 0;
            for (let j = 0; j < i; j++) {
                if (columnsConfig[j] !== '.') {
                    start += columnsConfig[j]
                } else {
                    start++;
                }
            }
            start++;
            return start
        }
        function getEnd(i) {
            return getStart(i) + columnsConfig[i];
        }
        function getContentColumns() {
            let count = 0;
            for (let j = 0; j < columnsConfig.length; j++) {
                if (columnsConfig[j] !== '.') {
                    count++;
                }
            }
            return count
        }
        function getConfigIndexByColumn(column) {
            column = column % getContentColumns();
            let counted = 0;
            for (let i = 0; i < columnsConfig.length; i++) {
                if (columnsConfig[i] !== '.') {
                    if (counted === column) {
                        return i
                    }
                    counted++;
                }
            }
        }

        function getWidth() {
            let width = 0;
            for (let i = 0; i < columnsConfig.length; i++) {
                if (columnsConfig[i] === '.') {
                    width++;
                } else {
                    width += columnsConfig[i];
                }
            }
            return width * columnWidth + (width - 1) * columnGap;
        }

        setWidth(getWidth());

        setColumnsCount(getEnd(columnsConfig.length - 1) - 1);

        for (let i = 0; i < children.length; i++) {


            let start = getStart(getConfigIndexByColumn(i));
            let end = getEnd(getConfigIndexByColumn(i));

            children[i].style.gridColumn = `${start} / ${end}`;


        }

    }, [breakpoint])

    return (
        <div className='layout-columns' style={{

            'width': `${width}px`,
            'gridTemplateColumns': `repeat(${columnsCount}, 1fr)`,

        }} ref={grid}>{props.children}</div>
    );
}

export default Columns;