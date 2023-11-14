function waitForScrollEnd(callback) {
    let last_changed_frame = 0;
    let last_x = window.scrollX;
    let last_y = window.scrollY;

    function tick(frames) {
        // We requestAnimationFrame either for 500 frames or until 20 frames with
        // no change have been observed.
        if (frames >= 500 || frames - last_changed_frame > 20) {
            callback();
        } else {
            if (
                window.scrollX != last_x ||
                window.scrollY != last_y
            ) {
                last_changed_frame = frames;
                last_x = window.scrollX;
                last_y = window.scrollY;
            }
            requestAnimationFrame(tick.bind(null, frames + 1));
        }
    }
    tick(0);

}

export default waitForScrollEnd;