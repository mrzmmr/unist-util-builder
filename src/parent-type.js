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

  // Fix for getters/setters and flow.
  // https://github.com/facebook/flow/issues/2826
  //
  // $FlowFixMe
  get _children() {
    return this.children
  }
}

export default Parent
