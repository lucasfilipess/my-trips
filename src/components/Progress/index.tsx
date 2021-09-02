import type { NextPage } from 'next'
import NextNprogress from 'nextjs-progressbar'
import { currentTheme } from 'theme'

const Progress: NextPage = () => {
  return (
    <NextNprogress
      color={currentTheme.colors.highlight}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
  )
}

export default Progress
