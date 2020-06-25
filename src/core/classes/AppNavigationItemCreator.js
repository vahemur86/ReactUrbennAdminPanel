
class AppNavigationItemCreator {
  constructor(text, ...rest){
    this.text = text;
    this.to = `/${text.toLowerCase()}`;
    this.innerNav = rest.map(innerNav =>({
      text : innerNav,
      to : innerNav === this.text ? `/${innerNav.toLowerCase()}` : `/${this.text.toLowerCase()}/${innerNav.toLowerCase()}`
    }))
  }
}
export default AppNavigationItemCreator;