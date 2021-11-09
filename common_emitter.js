'use strict'

import { EventEmitter } from 'events';

class CommonEmitter extends EventEmitter {
    constructor() {
        super();
        if(CommonEmitter.instance === null) {
            CommonEmitter.instance = this;
        }
        this.emit('start');
        //TODO: Might need to put .on('start, () => {...}) log here
        return CommonEmitter.instance;
    }

    emitEvent(customEventName, ...eventArgs) {
        this.emit(customEventName, eventArgs)
    }
}

const commonEmitter = new CommonEmitter();
export { commonEmitter };
