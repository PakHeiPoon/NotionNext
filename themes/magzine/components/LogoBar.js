import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

/**
 * 终端风站点 Logo：`~ $ title ▊`
 * 用等宽字体 + 磷光绿提示符 + 闪烁光标，营造 hacker-zine 调性
 * @param {*} props
 * @returns
 */
export default function LogoBar({ className }) {
  const title = siteConfig('TITLE')
  return (
    <div
      id='top-wrapper'
      className={`w-full flex items-center ${className || ''}`}>
      <SmartLink
        href='/'
        className='logo font-term inline-flex items-center whitespace-nowrap text-[15px] md:text-base font-bold p-2 rounded-lg duration-200 text-gray-800 dark:text-gray-100 hover:bg-black hover:text-white'>
        <span className='hidden sm:inline text-[#0fae5f] dark:text-[#4af08a] mr-1'>
          ~ $
        </span>
        <span>{title}</span>
        <span className='term-cursor' aria-hidden='true' />
      </SmartLink>
    </div>
  )
}
