'use strict'

import tap from 'tap'
import {Node} from '../node-type'
import {Text} from '../text-type'
import {Parent} from '../parent-type'

tap.test('unist-util-builder', t => {
  t.throws(() => new Node())
  t.throws(() => new Node({}))
  t.throws(() => new Node([]))
  t.throws(() => new Node(11))

  t.throws(() => new Parent())
  t.throws(() => new Parent('root'))
  t.throws(() => new Praent('root', 11))
  t.throws(() => new Parent('root', {}))
  t.throws(() => new Parent('root', ''))

  t.throws(() => new Text())

  const n = new Node('root')
  const h = new Text('Hello world!')
  const p = new Parent('root', [ h ])

  t.throws(() => n.check(1, 'string', 'test', x => typeof x === 'string'))
  t.throws(() => n.isString(1, 'test'))
  t.throws(() => n.isNumber('0', 'test'))
  t.throws(() => n.isArray('0', 'test'))

  t.ok(() => n.check('', 'string', 'test', x => typeof x === 'string'))
  t.ok(() => n.isString('', 'test'))
  t.ok(() => n.isNumber(1, 'test'))
  t.ok(() => n.isArray([], 'test'))
  t.ok(() => n.type === 'root')
  t.ok(() => n instanceof Node)
  t.deepEqual(n, {type: 'root'})


  t.ok(() => p.type === 'root')
  t.ok(() => Array.isArray(p.children))
  t.ok(() => p.children[0].type === 'root')
  t.ok(() => p instanceof Parent)
  t.deepEqual(p, {
    type: 'root',
    children: [ { type: 'text', value: 'Hello world!' } ]
  })

  t.ok(() => h.type === 'text')
  t.ok(() => h.value === 'Hello world!')
  t.ok(() => h instanceof Text)
  t.deepEqual(h, {
    type: 'text',
    value: 'Hello world!'
  })

  t.end()
})
