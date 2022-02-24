import {jest} from '@jest/globals';
import { hello, doMath } from '../src/index.js'

test('Test Hello', () => {
	expect(hello()).toBe('Hello World')
})

test('Do math', () => {
	expect(doMath(2, 4)).toBe(8)
})