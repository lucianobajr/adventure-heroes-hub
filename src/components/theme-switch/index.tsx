import type { FC } from 'react';
import { useContext } from 'react';
import ThemeContext from '../../contexts/theme/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitch: FC = () => {
    const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

    return (
        <button
            className="p-2 rounded-md bg-white  dark:bg-zinc-700 ml-4 border border-md w-10 h-10 flex items-center justify-center"
            onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
        >
            {currentTheme === 'light' ? <FiSun /> : <FiMoon />}
        </button>
    );
};

export default ThemeSwitch;
