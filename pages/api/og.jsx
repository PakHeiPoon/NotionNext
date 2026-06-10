import { ImageResponse } from 'next/og'

export const config = { runtime: 'edge' }

/**
 * 按需从 Google Fonts 拉取「仅包含所需字符」的子集字体（中文字体整包过大，
 * 用 text= 参数让 Google 只返回标题用到的字形，体积极小，满足 Edge 限制）。
 */
async function loadGoogleFont(font, text) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    font
  )}:wght@700&text=${encodeURIComponent(text)}`
  const css = await (
    await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  ).text()
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype|woff2?)'\)/
  )
  if (resource) {
    const res = await fetch(resource[1])
    if (res.status === 200) return await res.arrayBuffer()
  }
  throw new Error('failed to load font')
}

/**
 * 终端风动态社交分享卡片
 * /api/og?title=文章标题&cat=分类
 */
export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    const title = (searchParams.get('title') || "Dongao's Blog").slice(0, 64)
    const cat = (searchParams.get('cat') || '').slice(0, 16)

    const staticText = 'Dongao@blog: ~ $ cat ./post.md /blog.paking.xyz'
    const fontData = await loadGoogleFont('Noto Sans SC', title + cat + staticText)

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            background: '#0a0e0a',
            padding: '52px',
            fontFamily: '"Noto Sans SC"'
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              border: '1px solid #1d2a20',
              borderRadius: '18px',
              overflow: 'hidden',
              background: '#0a0e0a'
            }}>
            {/* 终端标题栏 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '22px 30px',
                borderBottom: '1px solid #1d2a20',
                background: '#0e140e'
              }}>
              <div style={{ display: 'flex', width: '16px', height: '16px', borderRadius: '9999px', background: '#ff5f56', marginRight: '10px' }} />
              <div style={{ display: 'flex', width: '16px', height: '16px', borderRadius: '9999px', background: '#ffbd2e', marginRight: '10px' }} />
              <div style={{ display: 'flex', width: '16px', height: '16px', borderRadius: '9999px', background: '#27c93f' }} />
              <div style={{ display: 'flex', marginLeft: '18px', color: '#6f8a78', fontSize: '26px' }}>Dongao@blog: ~</div>
            </div>
            {/* 正文 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                padding: '50px 56px',
                justifyContent: 'space-between'
              }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', color: '#4af08a', fontSize: '30px', marginBottom: '26px' }}>$ cat ./post.md</div>
                <div style={{ display: 'flex', color: '#ffffff', fontSize: title.length > 28 ? '54px' : '66px', fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', color: '#4af08a', fontSize: '30px' }}>~/blog.paking.xyz</div>
                  <div style={{ display: 'flex', width: '15px', height: '32px', background: '#4af08a', marginLeft: '10px' }} />
                </div>
                {cat ? (
                  <div style={{ display: 'flex', color: '#9fdcb3', fontSize: '27px', border: '1px solid #2f5a3f', borderRadius: '8px', padding: '6px 20px' }}>{cat}</div>
                ) : (
                  <div style={{ display: 'flex' }} />
                )}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [{ name: 'Noto Sans SC', data: fontData, weight: 700, style: 'normal' }]
      }
    )
  } catch (e) {
    return new Response('failed to generate og image', { status: 500 })
  }
}
