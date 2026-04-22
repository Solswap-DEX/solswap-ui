export const styles = {
  global: {
    'html,body,#__next,#app-layout': {
      height: '100%'
    },
    body: {
      fontFamily: `'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
      background: 'var(--background-app)',
      backgroundAttachment: 'fixed',
      color: 'var(--text-primary)'
    },
    '::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: '7px',
      height: '7px'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--primary)',
      borderRadius: '0px'
    }
  }
}
