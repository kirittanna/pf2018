import React, { Component, PropTypes } from 'react'
import SVGIcon from 'grommet/components/SVGIcon'

const CLASS_ROOT = 'ferret-logo'

class Logo extends Component {
  render() {
    const { busy, className, colorIndex, size, ...props } = this.props
    let classes = [CLASS_ROOT]
    if (busy) {
      classes.push(`${CLASS_ROOT}--busy`)
    }
    if (className) {
      classes.push(className)
    }
    return (
      <SVGIcon
        {...props}
        className={classes.join('')}
        colorIndex={colorIndex}
        size={size}
        viewBox="0 0 256 256"
        version="1.1"
        type="logo"
        a11yTitle="Ferret Logo"
      >
        <defs>
          <clipPath id="q">
            <rect
              width="246.982"
              height="246.477"
              x="-63.459"
              y="44.361"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="p">
            <rect
              width="246.982"
              height="246.477"
              x="-62.745"
              y="-6.957"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="o">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="n">
            <rect
              width="246.982"
              height="246.477"
              x="90.112"
              y="-4.099"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="m">
            <rect
              width="246.982"
              height="246.477"
              x="11.541"
              y="-15.528"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="l">
            <rect
              width="246.982"
              height="246.477"
              x="52.612"
              y="-3.385"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="k">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="j">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="i">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="h">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="g">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="f">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="e">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="d">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="c">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="b">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="a">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="ad">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="ac">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="ab">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="aa">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="Z">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="Y">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="X">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="W">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="V">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="U">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="T">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="S">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="R">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="Q">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="P">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="O">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="N">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="M">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="L">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="K">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="J">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="I">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="H">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="G">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="F">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="E">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="D">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="C">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="B">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="A">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="z">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="y">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="x">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="w">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="v">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="u">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="t">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="s">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
          <clipPath id="r">
            <rect
              width="246.982"
              height="246.477"
              x="4.041"
              y="4.472"
              ry="35.86"
              stroke="#fff"
              strokeWidth="0"
            />
          </clipPath>
        </defs>
        <rect width="246.982" height="246.477" x="4.041" y="4.472" ry="35.86" />
        <g fill="#013157">
          <path
            d="M127.28 127.433a82.05 82.05 0 1 1-164.1 0 82.05 82.05 0 1 1 164.1 0z"
            clipPath="url(#a)"
            opacity=".5"
          />
          <path
            d="M105.056 21.392a39.143 39.143 0 1 1-78.287 0 39.143 39.143 0 1 1 78.287 0z"
            clipPath="url(#b)"
            opacity=".5"
          />
          <path
            d="M230.82 99.426a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#c)"
            opacity=".5"
          />
          <path
            d="M148.492 28.21a38.89 38.89 0 1 1-77.781 0 38.89 38.89 0 1 1 77.781 0z"
            clipPath="url(#d)"
            opacity=".5"
          />
          <path
            d="M55.053 214.584a39.901 39.901 0 1 1-79.802 0 39.901 39.901 0 1 1 79.802 0z"
            clipPath="url(#e)"
            opacity=".5"
          />
          <path
            d="M272.741 29.22a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#f)"
            opacity=".5"
          />
          <path
            d="M228.8 15.584a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#g)"
            opacity=".5"
          />
          <path
            d="M262.64 19.624a40.911 40.911 0 1 1-81.823 0 40.911 40.911 0 1 1 81.823 0z"
            clipPath="url(#h)"
            opacity=".5"
          />
          <path
            d="M74.751 66.596a96.975 96.975 0 1 1-193.949 0 96.975 96.975 0 1 1 193.95 0z"
            clipPath="url(#i)"
            opacity=".5"
          />
          <path
            d="M193.444 116.851a39.143 39.143 0 1 1-78.287 0 39.143 39.143 0 1 1 78.287 0z"
            clipPath="url(#j)"
            opacity=".5"
          />
          <path
            d="M193.444-21.792a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#k)"
            opacity=".5"
          />
          <path
            transform="translate(-48.571 7.857)"
            d="M193.444-21.792a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#l)"
            opacity=".5"
          />
          <path
            transform="translate(-7.5 20)"
            d="M193.444-21.792a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#m)"
            opacity=".5"
          />
          <path
            transform="translate(-86.071 8.571)"
            d="M193.444-21.792a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#n)"
            opacity=".5"
          />
          <path
            d="M193.444 62.808a39.143 39.143 0 1 1-78.287 0 39.143 39.143 0 1 1 78.287 0z"
            clipPath="url(#o)"
            opacity=".5"
          />
          <path
            transform="translate(66.786 11.429)"
            d="M230.82 99.426a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#p)"
            opacity=".5"
          />
          <path
            transform="translate(67.5 -39.889)"
            d="M230.82 99.426a39.396 39.396 0 1 1-78.792 0 39.396 39.396 0 1 1 78.792 0z"
            clipPath="url(#q)"
            opacity=".5"
          />
        </g>
        <g fill="#fff">
          <path d="M68.185 21.77a2.273 2.273 0 1 1-4.545 0 2.273 2.273 0 1 1 4.545 0zM111.4 27.842a2.273 2.273 0 1 1-4.546 0 2.273 2.273 0 1 1 4.546 0zM47.471 127.842a2.273 2.273 0 1 1-4.546 0 2.273 2.273 0 1 1 4.546 0zM193.542 100.342a2.273 2.273 0 1 1-4.545 0 2.273 2.273 0 1 1 4.545 0zM191.757 15.342a2.273 2.273 0 1 1-4.546 0 2.273 2.273 0 1 1 4.546 0zM223.185 19.628a2.273 2.273 0 1 1-4.545 0 2.273 2.273 0 1 1 4.545 0zM235.685 28.557a2.273 2.273 0 1 1-4.545 0 2.273 2.273 0 1 1 4.545 0zM17.273 215.286a2.273 2.273 0 1 1-4.546 0 2.273 2.273 0 1 1 4.546 0z" />
        </g>
        <g fill="none" stroke="#fff">
          <path d="M66.071 21.714L45.357 128.857" clipPath="url(#r)" />
          <path d="M109.286 27.429l44.285 35.357" clipPath="url(#s)" />
          <path d="M191.071 100.286l-48.928-51.072" clipPath="url(#t)" />
          <path d="M66.071 22.071l43.572 6.072" clipPath="url(#u)" />
          <path d="M45.357 127.786L132.5 46.714" clipPath="url(#v)" />
          <path d="M45.714 126.357L15 215.286" clipPath="url(#w)" />
          <path d="M191.071 100.643L162.5 114.214" clipPath="url(#x)" />
          <path
            d="M161.786 116.357L45.357 127.786l-56.786 37.857"
            clipPath="url(#y)"
          />
          <path d="M44.643 127.786L-17.5 69.929" clipPath="url(#z)" />
          <path d="M66.429 22.071l-87.143 46.072" clipPath="url(#A)" />
          <path d="M109.286 27.786l10.357 29.285" clipPath="url(#B)" />
          <path d="M66.071 22.429l44.286 29.642" clipPath="url(#C)" />
          <path d="M190.714 99.929l70 10.714" clipPath="url(#D)" />
          <path d="M233.571 29.929L256.43 57.07" clipPath="url(#E)" />
          <path d="M221.071 19.571l12.5 10.358" clipPath="url(#F)" />
          <path d="M189.643 15.643l-30 42.857" clipPath="url(#G)" />
          <path d="M221.071 19.571L160 61" clipPath="url(#H)" />
          <path d="M66.071 21.714l-4.285-27.5" clipPath="url(#I)" />
          <path d="M190 15.643l31.429 4.286" clipPath="url(#J)" />
          <path d="M65.714 22.071L76.43-8.286" clipPath="url(#K)" />
          <path d="M109.643 28.5l-27.5-31.786" clipPath="url(#L)" />
          <path d="M189.643 15.286l-56.429 34.643" clipPath="url(#M)" />
          <path d="M233.571 28.857l10-16.786" clipPath="url(#N)" />
          <path d="M108.929 27.786L137.5-1.143" clipPath="url(#O)" />
          <path d="M189.643 15.286l4.643-16.429" clipPath="url(#P)" />
          <path d="M233.571 29.571l19.643-2.857" clipPath="url(#Q)" />
          <path d="M109.286 27.429l18.928-33.215" clipPath="url(#R)" />
          <path d="M189.643 15.643l31.786-14.286" clipPath="url(#S)" />
          <path d="M108.929 27.786l-15.358-35" clipPath="url(#T)" />
          <path d="M221.429 19.571L177.857-6.5" clipPath="url(#U)" />
          <path d="M108.929 28.143l45-35.357" clipPath="url(#V)" />
          <path d="M126.786 45.286l21.071-48.572" clipPath="url(#W)" />
          <path d="M233.571 29.571L258.93 36" clipPath="url(#X)" />
          <path d="M221.786 19.929l-20-26.072" clipPath="url(#Y)" />
          <path d="M234.286 29.929L202.143-9.357" clipPath="url(#Z)" />
          <path d="M221.071 19.929l33.929.357" clipPath="url(#aa)" />
          <path d="M189.286 16l-37.5-16.429" clipPath="url(#ab)" />
          <path d="M220.714 19.929l21.429-18.572" clipPath="url(#ac)" />
          <path d="M189.286 16L173.57-4" clipPath="url(#ad)" />
        </g>
        <path
          d="M80.813 41.344v175.75h20.718v-53.531h43.438c15.11 0 27.25-12.14 27.25-27.25V68.624c0-15.11-12.14-27.281-27.25-27.281H80.813zM101.53 61.28h43.937a6.05 6.05 0 0 1 6.063 6.063v69.469a6.05 6.05 0 0 1-6.062 6.062H101.53V61.281z"
          fill="#fff"
        />
        <g fill="#fff">
          <path d="M159.094 187.781c-8.975 0-16.25 7.276-16.25 16.25 0 8.975 7.275 16.25 16.25 16.25 8.974 0 16.25-7.275 16.25-16.25 0-8.974-7.276-16.25-16.25-16.25zm-4.813 8.938l12.5 7.5-12.5 7.125v-14.625zM194.813 187.781c-8.975 0-16.25 7.276-16.25 16.25 0 8.975 7.275 16.25 16.25 16.25 8.974 0 16.25-7.275 16.25-16.25 0-8.974-7.276-16.25-16.25-16.25zM189.28 198.5h11.438v11.438H189.28V198.5z" />
        </g>
      </SVGIcon>
    )
  }
}

Logo.propTypes = {
  busy: PropTypes.bool,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Logo.defaultProps = {
  colorIndex: 'brand',
  size: 'small',
}

module.exports = Logo
