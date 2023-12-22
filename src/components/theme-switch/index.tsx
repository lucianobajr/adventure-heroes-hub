import type { FC } from 'react'
import { useContext } from 'react'
import ThemeContext from '../../contexts/theme/ThemeContext'

const ThemeSwitch: FC = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext)

    return (
        <button
            style={{
                padding: 5,
                borderRadius: 5,
                color: currentTheme === 'light' ? 'white' : 'black',
                background: currentTheme === 'light' ? 'black' : 'white',
            }}
            onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
        >
            Go {currentTheme === 'light' ? 'DARK' : 'LIGHT'} MODE
        </button>
    )
}

export default ThemeSwitch