import useDidUpdateEffect from '@helpers/useDidUpdateEffect'
import { useRef, useState } from 'react'
import './Loader.less'
const Loader = ({ count }) => {
    const [progress, setProgress] = useState('0px')
    const wrapperRef = useRef(null)

    useDidUpdateEffect(() => {
        const widthWrapper = wrapperRef.current.offsetWidth
        const newProgress = widthWrapper / 100 * count
        setProgress(newProgress + 'px')
    })

    return <div className="full-screen-loader">
        <div className='full-screen-loader__count'>{count}%</div>
        <div className='full-screen-loader__wrapper' ref={wrapperRef}>
            <div className='full-screen-loader__progress' style={{ width: `${progress}` }}></div>
        </div>
    </div>
}
export default Loader