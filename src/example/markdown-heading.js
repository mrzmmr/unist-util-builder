'use strict'

// @flow
//
// Create an mdast markdown heading class

// Dependencies

import remark from 'remark'
import {Parent, ParentT} from '../parent-type'
import {Text} from '../text-type'

// Type Dependencies

import type {PositionT, DataT} from '../node-type'

interface HeadingT extends ParentT {
  depth: number
}

class Heading extends Parent implements HeadingT {
  depth: number

  constructor(value: string, depth: number, data?: DataT, position?: PositionT) {
    super('heading', [], data, position)

    const textChild = new Text(value)

    this.children.push(textChild)

    if (depth <= 0) {
      this.depth = 1
    } else if (depth > 6) {
      this.depth = 6
    } else {
      this.depth = depth
    }
  }
}

remark.stringify(
  new Parent('root', [new Heading('Hello world!', 2)])
)

// => ## Hello world!\n
