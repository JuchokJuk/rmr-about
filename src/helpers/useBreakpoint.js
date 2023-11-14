import { useState, useEffect } from 'react'

export const useBreakpoint = () => {

    const [breakpoint, setBreakpoint] = useState();

    useEffect(() => {

        function updateSize() {
            // Проверяем брекпоинты
            let point = 0;
            if (window.innerWidth > 1366) { point = 0 }
            if (window.innerWidth < 1366) { point = 1 }
            if (window.innerWidth < 1024) { point = 2 }
            if (window.innerWidth < 768 ) { point = 3 }
            if (window.innerWidth < 375 ) { point = 4 }
            if (window.innerWidth >= 2200) { point = 'max' }

            setBreakpoint(point);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return breakpoint;
}