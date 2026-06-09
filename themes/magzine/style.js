/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* ===== 终端 / 磷光绿 主题变量 ===== */
      :root {
        --term-green: #4af08a; /* 亮磷光绿：深色面上的强调色 / 光标 */
        --term-green-ink: #0fae5f; /* 深磷光绿：浅色面上的链接 / hover */
        --term-bg: #0a0e0a; /* 带一点绿调的近黑，终端背景 */
        --term-line: #1d2a20; /* 终端面板分隔线 */
        --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo,
          Consolas, 'Liberation Mono', monospace;
      }

      /* 选区色：磷光绿 on 黑，强化终端感 */
      ::selection {
        background: var(--term-green);
        color: #04130a;
      }
      ::-moz-selection {
        background: var(--term-green);
        color: #04130a;
      }

      /* 底色：深色模式用带绿调的近黑 */
      .dark body {
        background-color: var(--term-bg);
      }

      /* ===== 终端光标闪烁 ===== */
      @keyframes term-blink {
        0%,
        49% {
          opacity: 1;
        }
        50%,
        100% {
          opacity: 0;
        }
      }
      .term-cursor {
        display: inline-block;
        width: 0.6em;
        height: 1.05em;
        margin-left: 2px;
        vertical-align: text-bottom;
        background: var(--term-green);
        animation: term-blink 1.05s steps(1) infinite;
      }

      /* ===== 等宽字体工具类（Logo / 标题 / 标签等局部使用） ===== */
      .font-term {
        font-family: var(--font-mono);
        font-feature-settings: 'liga' 0;
      }

      /* ===== 终端面板（首页 Hero 用） ===== */
      .term-panel {
        font-family: var(--font-mono);
        background: var(--term-bg);
        color: #d7e8dc;
        border: 1px solid var(--term-line);
        border-radius: 10px;
        box-shadow: 0 0 0 1px rgba(74, 240, 138, 0.06),
          0 18px 50px -24px rgba(74, 240, 138, 0.35);
        overflow: hidden;
      }
      .term-titlebar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-bottom: 1px solid var(--term-line);
        background: linear-gradient(180deg, #0e140e 0%, var(--term-bg) 100%);
      }
      .term-dot {
        width: 11px;
        height: 11px;
        border-radius: 9999px;
        display: inline-block;
      }
      .term-prompt {
        color: var(--term-green);
      }
      .term-muted {
        color: #6f8a78;
      }

      /* ===== 自定义滚动条样式（Chrome / Safari / Edge） ===== */
      html::-webkit-scrollbar {
        width: 12px;
      }
      html::-webkit-scrollbar-track {
        background-color: transparent;
      }
      html::-webkit-scrollbar-thumb {
        background: #2f5a3f;
      }
      html::-webkit-scrollbar-thumb:hover {
        background: var(--term-green-ink);
      }
    `}</style>
  )
}

export { Style }
