'use strict'

import { EventEmitter } from 'events';

class CommonEmitter extends EventEmitter {
    constructor() {
        super();
        if(CommonEmitter.instance instanceof CommonEmitter) {
            CommonEmitter.instance = this;
        }
        this.emit('start');
        return CommonEmitter.instance;
    }

    emitEvent(customEventName, eventArgs) {
        this.emit(customEventName, eventArgs);
    }
}

const commonEmitter = new CommonEmitter();
export { commonEmitter };
