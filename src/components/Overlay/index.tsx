import type { NextPage } from 'next'
import { ReactNode } from 'react'
import Switch from 'react-switch'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Menu2Outline } from '@styled-icons/evaicons-outline/Menu2Outline'
import useTheme from 'hooks/useTheme'
import useToggle from 'hooks/useToggle'
import * as Styles from './styles'

export type Props = {
  href: string
  children: ReactNode
}

const Overlay: NextPage = () => {
  const { theme, handleSetTheme } = useTheme()
  const [sideBar, toggleSidebar] = useToggle(false)

  const handleSwitchChange = () => {
    if (theme === 'light') {
      handleSetTheme('dark')
    } else if (theme === 'dark') {
      handleSetTheme('light')
    }
  }

  return (
    <>
      <Styles.MenuButton onClick={toggleSidebar}>
        <Menu2Outline size={32} aria-label="close" />
      </Styles.MenuButton>
      <Styles.Wrapper open={sideBar} onClick={toggleSidebar} />
      <Styles.Sidebar open={sideBar}>
        <Styles.Body>
          <Styles.Header>
            <Styles.Heading>My Trips</Styles.Heading>
            <Styles.CloseButton onClick={toggleSidebar}>
              <CloseOutline size={32} aria-label="close" />
            </Styles.CloseButton>
          </Styles.Header>
          <Styles.Content>
            <Switch
              aria-label="toggle theme"
              className="react-switch"
              offColor="#4d4d4d"
              onColor="#4d4d4d"
              activeBoxShadow="0px 0px 1px 10px rgba(255, 255, 255, 0.2)"
              height={28}
              width={60}
              handleDiameter={23}
              onChange={handleSwitchChange}
              checked={theme === 'dark'}
              uncheckedIcon={<Styles.Icon position="end">🌞</Styles.Icon>}
              checkedIcon={<Styles.Icon position="start">🌜</Styles.Icon>}
            />
          </Styles.Content>
          <Styles.Footer>
            <p>
              GitHub{' '}
              <a href="https://github.com/lucasfilipess">lucasfilipess</a>
            </p>
          </Styles.Footer>
        </Styles.Body>
      </Styles.Sidebar>
    </>
  )
}

export default Overlay
