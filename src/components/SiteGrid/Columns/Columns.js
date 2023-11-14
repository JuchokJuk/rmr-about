import { useBreakpoint } from '@helpers/useBreakpoint';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { useState } from 'react';
import './style.less';

const Columns = (props) => {

    /*

    Example:

    <Columns adaptive={{
        b375: [1, 1], // two columns at smalest breakpoint. 375 breakpoint has only two columns
        b768: [6, 6], // other breakpoints has 12 columns
        b1024: [6, 6],
        b1366: [4, 4, 4], // three columns at 1366px screen width
        b2300: [8, 4] // two columns width different width at largest breakpoint
    }}></Columns>

    */

    const breakpoint = useBreakpoint();
    const [style, setStyle] = useState();

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
        // console.log(props.adaptive)
        // console.log(design)
        let columnsConfig = props.adaptive[design];
        // console.log(columnsConfig)
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

        let gridTemplateColumns = [];

        for (let fr of columnsConfig) {
            // console.log(columnGap);
            gridTemplateColumns.push((fr - 1) * columnGap + fr * columnWidth + 'px')
        }

        setStyle(gridTemplateColumns.join(' '))
    }, [breakpoint])

    return (
        <div className='layout-columns' style={{ 'gridTemplateColumns': style }}>{props.children}</div>
    );
}

export default Columns;