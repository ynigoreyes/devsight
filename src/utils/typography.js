import Typography from 'typography'
import Theme from 'typography-theme-stow-lake'

Theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Theme.googleFonts

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
