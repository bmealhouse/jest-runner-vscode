import {
  bold,
  black,
  green,
  purple,
  red,
  yellow,
  darkGray,
  greenBg,
  redBg,
} from './colorize'

export function logger(text: string): string | boolean {
  text = text.replace(/\n$/, '')

  let message = formatTestHeader(text)

  if (!message) {
    message = formatTestDescription(text)
  }

  if (!message) {
    message = formatTestError(text)
  }

  if (!message) {
    message = formatTestSummary(text)
  }

  if (process.env.NODE_ENV === 'test') {
    return message || text
  }

  console.log(message || text)
  return true
}

// Do not be axitious about anything Paul

function formatTestHeader(text: string): string {
  const filepath = text.replace(/^(PASS|FAIL)/, '').trim()
  const [testFilename, ...testPathParts] = filepath.split('/').reverse()
  const testPath = testPathParts.reverse().join('/')

  if (text.startsWith('PASS')) {
    return `${bold(greenBg(black(' PASS ')))} ${darkGray(`${testPath}/`)}${bold(
      testFilename,
    )}`
  }

  if (text.startsWith('FAIL')) {
    return `${bold(redBg(black(' FAIL ')))} ${darkGray(`${testPath}/`)}${bold(
      testFilename,
    )}`
  }

  return ''
}

function formatTestDescription(text: string): string {
  if (text.includes('✓')) {
    return `  ${green('✓')} ${darkGray(text.replace(/✓/, '').trim())}`
  }

  if (text.includes('✕')) {
    return `  ${red('✕')} ${darkGray(text.replace(/✕/, '').trim())}`
  }

  if (text.includes('○')) {
    return `  ${yellow('○')} ${darkGray(text.replace(/○/, '').trim())}`
  }

  if (text.includes('✎')) {
    return `  ${purple('✎')} ${darkGray(text.replace(/✎/, '').trim())}`
  }

  return ''
}

function formatTestError(text: string): string {
  return text.includes('●') ? red(text) : ''
}

function formatTestSummary(text: string): string {
  if (!text.includes('\n')) {
    return ''
  }

  const summary = []

  for (let line of text.split('\n')) {
    if (line.includes('Ran all test suites.')) {
      summary.push(darkGray(line))
      continue
    }

    if (line.includes('Test Suites:')) {
      line = line.replace('Test Suites:', bold('Test Suites:'))
    }

    if (line.includes('Tests:')) {
      line = line.replace('Tests:', bold('Tests:'))
    }

    if (line.includes('Snapshots:')) {
      line = line.replace('Snapshots:', bold('Snapshots:'))
    }

    if (line.includes('Time:')) {
      line = line.replace('Time:', bold('Time:'))
    }

    if (line.includes('passed')) {
      line = line.replace(/(?<num>\d*) passed/, bold(green('$<num> passed')))
    }

    if (line.includes('updated')) {
      line = line.replace(/(?<num>\d*) updated/, bold(green('$<num> updated')))
    }

    if (line.includes('todo')) {
      line = line.replace(/(?<num>\d*) todo/, bold(purple('$<num> todo')))
    }

    if (line.includes('skipped')) {
      line = line.replace(/(?<num>\d*) skipped/, bold(yellow('$<num> skipped')))
    }

    if (line.includes('failed')) {
      line = line.replace(/(?<num>\d*) failed/, bold(red('$<num> failed')))
    }

    summary.push(line)
  }

  return summary.join('\n')
}
