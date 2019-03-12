import React, { ReactNode, Component } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'
import classnames from 'classnames'

const styles = (theme: SaladTheme) => ({
  button: {
    display: 'inline-block',
    // height: '31px',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 0,
    },
    border: `1px solid ${theme.offWhite}`,
    padding: '.5rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    userSelect: 'none',
    color: theme.offWhite,
    fontSize: '.625rem',
    fontFamily: 'sharpGroteskLight25',
    '&:hover': {
      opacity: 0.9,
    },
  },
  enabled: {
    cursor: 'pointer',
  },
  disabled: {
    cursor: 'not-allowed',
  },
})

interface Props extends WithStyles<typeof styles> {
  type?: string
  disabled?: boolean
  children?: ReactNode
  className?: string
  onClick?: () => void
}

class _Button extends Component<Props> {
  handleClick = () => {
    const { disabled, onClick } = this.props
    if (!disabled && onClick != null) {
      onClick()
    }
  }

  render() {
    const { className, type, classes, disabled, children } = this.props
    return (
      <button
        type={type}
        className={classnames(classes.button, className, {
          [classes.disabled]: disabled,
          [classes.enabled]: !disabled,
        })}
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }
}

export const Button = withStyles(styles)(_Button)