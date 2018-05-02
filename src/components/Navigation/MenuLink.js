import { navigateTo } from 'gatsby-link'

class MenuLink extends React.Component {
  onClick = e => {
    const { activateMe, hasSubMenu, label, to, toggleSubMenu } = this.props

    if (hasSubMenu) toggleSubMenu(e)
    else {
      /*
       * your own operation using "to"
       * myGotoFunc(this.props.to);
       * or
       * this.props.activateMe(/* Parameters to pass "onSelected" event listener */

      activateMe({
        newLocation: to,
        selectedMenuLabel: label,
      })

      navigateTo(to)
    }
  }

  render() {
    return (
      <button className="metismenu-link" onClick={this.onClick}>
        {this.props.children}
      </button>
    )
  }
}
