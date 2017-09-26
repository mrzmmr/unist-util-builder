'use strict'

// @flow

// Dependencies

import type {DataT, PositionT} from './node-type'
import {Node, NodeT} from './node-type'

// Text type

export interface TextT extends NodeT {
  value: string
}

// Text implementaion

export class Text extends Node implements TextT {
  value: string

  constructor(value: string, data?: DataT, position?: PositionT) {
    super('text', data, position)

    this.value = value
  }
}

export default Text
