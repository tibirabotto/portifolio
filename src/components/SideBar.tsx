import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from 'next-themes'
export default function SibeBar() {

  const {theme, setTheme} = useTheme()

  function changeTheme() {
    setTheme(theme === 'light' ? "dark" : "light")
  } 

  return (
    <div>
      <img
        src="https://lh3.googleusercontent.com/a/AAcHTteRy9OTrG1QAt93JiaebXK8fOzauST05nKdHRvwoks6AeM=s576-c-no"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Tibira </span>
        Botto
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        FullStack Developer
      </p>
      <a
        href="/tibira-botto.docx"
        download="tibira-botto"
        target="_BLANK"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 my-5 text-green md:w-full md:mx-auto">
        <a href="https://github.com/tibirabotto" target="_BLANK">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/tibirabotto/" target="_BLANK">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Toronto, Canada</span>
        </div>
        <p className="my-2">tibira.botto@gmail.com</p>
        <p className="my-2">+1 (579) 423-5533</p>
      </div>
      <button onClick={() => window.open('mailto:tibira.botto@gmail.com')} className="w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Email Me</button>
      <button onClick={changeTheme} className="w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">Toogle Theme</button>
    </div>
  );
}
