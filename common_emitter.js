'use strict'

import { EventEmitter } from 'events';

class CommonEmitter extends EventEmitter {
    constructor() {
        super();
        if(CommonEmitter.instance === null) {
            CommonEmitter.instance = this;
        }
        this.emit('start', () => {
            console.log('commonEmitter: Started...')
        });
        return CommonEmitter.instance;
    }

    emitEvent(customEventName, ...eventArgs) {
        this.emit(customEventName, eventArgs)
    }
}
