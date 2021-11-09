'use strict'

import { EventEmitter } from 'events';

class CommonEmitter extends EventEmitter {
    constructor() {
        super();
        if(CommonEmitter.instance === null) { 
            CommonEmitter.instance = this;
        }
        return CommonEmitter.instance
    }
}
