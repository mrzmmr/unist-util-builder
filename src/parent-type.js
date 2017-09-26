'use strict'

// @flow

// Dependencies

import type {PositionT, DataT} from './node-type'
import {NodeT, Node} from './node-type'

// Parent type

export interface ParentT extends NodeT {
  children: Array<NodeT>
}

// Parent implementation

export class Parent extends Node implements ParentT {
  children: Array<NodeT>

  constructor(
    type: string,
    children: Array<NodeT>,
    data?: DataT,
    position?: PositionT
  ) {
    super(type, data, position)

    this.children = children
  }
}

export default Parent
