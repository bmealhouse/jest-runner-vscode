/* eslint-disable @typescript-eslint/quotes */
import {logger} from './logger'

test('returns text without no formatting', () => {
  expect(logger('text with no formatting')).toMatchInlineSnapshot(
    `"text with no formatting"`,
  )
})

test('returns passing test header', () => {
  expect(logger('PASS src/path/to/file.ts')).toMatchInlineSnapshot(
    `"[1m[42m[30m PASS [0m[0m[0m [90msrc/path/to/[0m[1mfile.ts[0m"`,
  )
})

test('returns failing test header', () => {
  expect(logger('FAIL src/path/to/file.ts')).toMatchInlineSnapshot(
    `"[1m[41m[30m FAIL [0m[0m[0m [90msrc/path/to/[0m[1mfile.ts[0m"`,
  )
})

test('returns passing test description', () => {
  expect(logger('✓ description of test')).toMatchInlineSnapshot(
    `"  [32m✓[0m [90mdescription of test[0m"`,
  )
})

test('returns failing test description', () => {
  expect(logger('✕ description of test')).toMatchInlineSnapshot(
    `"  [31m✕[0m [90mdescription of test[0m"`,
  )
})

test('returns skipped test description', () => {
  expect(logger('○ description of test')).toMatchInlineSnapshot(
    `"  [33m○[0m [90mdescription of test[0m"`,
  )
})

test('returns todo test description', () => {
  expect(logger('✎ description of test')).toMatchInlineSnapshot(
    `"  [35m✎[0m [90mdescription of test[0m"`,
  )
})

test('returns test failure message', () => {
  expect(logger('● test failure message')).toMatchInlineSnapshot(
    `"[31m● test failure message[0m"`,
  )
})

test('returns test summary', () => {
  expect(
    logger(
      `Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 1 skipped, 1 todo, 4 total
Snapshots:   1 failed, 1 updated, 1 passed, 3 total
Time:        5.000s
Ran all test suites.`,
    ),
  ).toMatchInlineSnapshot(`
    "[1mTest Suites:[0m [1m[31m1 failed[0m[0m, [1m[32m1 passed[0m[0m, 2 total
    [1mTests:[0m       [1m[31m1 failed[0m[0m, [1m[32m1 passed[0m[0m, [1m[33m1 skipped[0m[0m, [1m[35m1 todo[0m[0m, 4 total
    [1mSnapshots:[0m   [1m[31m1 failed[0m[0m, [1m[32m1 updated[0m[0m, [1m[32m1 passed[0m[0m, 3 total
    [1mTime:[0m        5.000s
    [90mRan all test suites.[0m"
  `)
})
// TODO: test summary
