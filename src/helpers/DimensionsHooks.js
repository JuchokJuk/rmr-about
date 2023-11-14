import { useState, useCallback, useEffect } from "react";


function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
        top: "x" in rect ? rect.x : rect.top,
        left: "y" in rect ? rect.y : rect.left,
        x: "x" in rect ? rect.x : rect.left,
        y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom
    };
}


// ToDo: наверное, нужно превратить в hoc, чтоб не висело много listener'ов на одно и тоже
function useDimensions({ liveMeasure = false}) {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState(null);

    const ref = useCallback(node => {
        setNode(node);
    }, []);

    useEffect(() => {
        if (node) {
            const measure = () =>{
                window.requestAnimationFrame(() =>
                    setDimensions(getDimensionObject(node))
                );
            }
            measure();

            if (liveMeasure) {
                node.addEventListener("resize", measure);

                return () => {
                    node.removeEventListener("resize", measure);
                };
            }
        }
    }, [node]);

    return [ref, dimensions, node];
}

export default useDimensions;