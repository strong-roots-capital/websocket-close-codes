import test from 'ava'

/**
 * Library under test
 */

import WSCloseCode from '../src/websocket-close-codes'

test('should be importable', t => {
    t.is(WSCloseCode.NormalClosure, 1000)
})
