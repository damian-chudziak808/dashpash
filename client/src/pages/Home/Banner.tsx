import { FaDiscord, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '~/components'

const Banner = () => {
  return (
    <div className="bg-dotted-spacing-2 bg-dotted-gray-200 relative flex flex-col from-gray-50 to-transparent py-12 px-6 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t">
      <div className="z-10 mx-auto grid w-full max-w-6xl grid-flow-row">
        <div className="z-10 col-start-1 row-start-1 mb-2 w-full text-sm font-bold text-gray-400">
          BY DAMIAN CHUDZIAK
        </div>
        <div className="z-10 col-start-1 row-start-2 w-full max-w-[20rem] text-4xl font-bold tracking-tight md:max-w-[32rem] md:text-6xl">
          Tap into the language of dots and dashes
        </div>
        <div className="z-10 col-start-1 row-start-3 mt-4 w-full max-w-[30rem] text-sm text-gray-500">
          <p>
            dash<span className="font-bold">pash</span> is more of a private
            playground of mine than a real project. I created it to learn and
            experiment with new technologies and techniques. I hope you'll find it
            useful and interesting.
          </p>
          <div className=" my-4 flex gap-4 border-b pb-4">
            <a href="#" className="flex items-center gap-2">
              <FaGithub className="text-base text-gray-500" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaLinkedin className="text-base text-gray-500" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <FaDiscord className="text-base text-gray-500" />
              <span className="text-sm font-medium">Discord</span>
            </a>
          </div>
          <div className="mb-8 flex gap-2">
            <Button theme="dark">
              <Link to="/register">Make an account</Link>
            </Button>
            <Button theme="outline">
              <Link to="/login">Log In</Link>
            </Button>
          </div>
        </div>
        <div className="z-0 col-start-1 row-span-5 row-start-1 hidden w-full select-none justify-end opacity-20 blur-[2px] md:flex lg:opacity-100 lg:blur-0">
          <div className="flex h-fit max-w-[32rem] flex-col rounded-lg bg-transparent p-4">
            <div className="flex flex-col items-center text-sm text-gray-800">
              <p className="my-2 rounded-lg border bg-gray-50 px-4 py-2 shadow-sm">
                Hi! I love to write messages in morse code. It's so much fun! You
                should try it out. Sign up now!
              </p>
              <FaArrowDown className="my-6 text-xl" />
              <p className="my-2 rounded-lg border bg-gray-50 px-4 py-2 font-mono font-medium shadow-sm">
                .... .. -.-.-- / .. / .-.. --- ...- . / - --- / .-- .-. .. - . / -- .
                ... ... .- --. . ... / .. -. / -- --- .-. ... . / -.-. --- -.. .
                .-.-.- / .. - .----. ... / ... --- / -- ..- -.-. .... / ..-. ..- -.
                -.-.-- / -.-- --- ..- / ... .... --- ..- .-.. -.. / - .-. -.-- / .. -
                / --- ..- - .-.-.- / ... .. --. -. / ..- .--. / -. --- .-- -.-.--
              </p>
            </div>
            <div className="mt-4 font-mono text-xs text-gray-400">
              This is just a non-functional preview. Sign Up for more.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
