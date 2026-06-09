import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 首页终端风信息栏 Banner
 * 文案仍由 config / Notion 的 MAGZINE_HOME_* 字段驱动，只是渲染成一个终端窗口
 * @returns
 */
export default function BannerItem() {
  const banner = siteConfig('MAGZINE_HOME_BANNER_ENABLE', null, CONFIG)
  const button = siteConfig('MAGZINE_HOME_BUTTON', null, CONFIG)
  const text = siteConfig('MAGZINE_HOME_BUTTON_TEXT', null, CONFIG)
  const url = siteConfig('MAGZINE_HOME_BUTTON_URL', null, CONFIG)
  const title = siteConfig('MAGZINE_HOME_TITLE', null, CONFIG)
  const description = siteConfig('MAGZINE_HOME_DESCRIPTION', null, CONFIG)
  const tips = siteConfig('MAGZINE_HOME_TIPS', null, CONFIG)
  const author = siteConfig('AUTHOR') || 'me'

  if (!banner) {
    return null
  }

  return (
    <div className='term-panel w-full text-sm leading-relaxed'>
      {/* 终端标题栏 */}
      <div className='term-titlebar'>
        <span className='term-dot' style={{ background: '#ff5f56' }} />
        <span className='term-dot' style={{ background: '#ffbd2e' }} />
        <span className='term-dot' style={{ background: '#27c93f' }} />
        <span className='term-muted ml-2 text-xs'>{author}@blog: ~</span>
      </div>

      {/* 终端正文 */}
      <div className='px-5 py-5 flex flex-col gap-y-3'>
        <div>
          <div>
            <span className='term-prompt'>$</span>{' '}
            <span className='term-muted'>whoami</span>
          </div>
          <div className='pl-3 text-[#9fdcb3]'>{tips}</div>
        </div>

        <div>
          <div>
            <span className='term-prompt'>$</span>{' '}
            <span className='term-muted'>cat ./profile.md</span>
          </div>
          <h2 className='pl-3 mt-1 text-lg md:text-xl font-bold text-white'>
            {title}
          </h2>
          <p className='pl-3 mt-1 term-muted'>{description}</p>
        </div>

        {button && (
          <SmartLink
            href={url}
            className='mt-1 self-start inline-flex items-center gap-x-2 px-4 py-2 rounded-md font-bold text-[#04130a] bg-[#4af08a] hover:bg-[#7df7ab] transition-colors duration-200'>
            <span>$ {text}</span>
            <span aria-hidden='true'>→</span>
          </SmartLink>
        )}

        <div className='pt-1'>
          <span className='term-prompt'>$</span>
          <span className='term-cursor' aria-hidden='true' />
        </div>
      </div>
    </div>
  )
}
