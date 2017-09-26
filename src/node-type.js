'use strict'

// @flow

// TODO: Need to create a type for number > 0 and number >= 0
//       for PointT and PositionT.

// Data type

export type DataT = {}

// Point type

export type PointT = {
  line: number,
  column: number,
  offset?: number,
}

// Position type

export type PositionT = {
  start: PointT,
  end: PointT,
  indent?: number,
}

// Node type

export interface NodeT {
  type: string,
  data?: DataT,
  position?: PositionT,
}

// Node implementation

export class Node implements NodeT {
  type: string
  data: DataT
  position: PositionT

  constructor(type: string, data?: DataT, position?: PositionT) {
    this.type = type

    if (data) {
      this.data = data
    }

    if (position) {
      this.position = position
    }
  }
}

export default Node
