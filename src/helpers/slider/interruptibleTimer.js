class InterruptibleTimer {
    
    timerId;
    start;
    remaining;
    callbackFired = false;

    constructor(callback, remaining) {
        this.remaining = remaining;
        this.callback = callback;
        this.resume();
    }

    pause() {
        clearTimeout(this.timerId);
        this.timerId = null;
        this.remaining -= Date.now() - this.start;
    }

    resume() {
        if (this.timerId || this.callbackFired) {
            return;
        }

        this.start = Date.now();
        this.timerId = setTimeout(()=>{
            this.callback();
            this.callbackFired = true;
        }
        , this.remaining);
    }

    destroy(){
        clearTimeout(this.timerId)
    }
}
export default InterruptibleTimer