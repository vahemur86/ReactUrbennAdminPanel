class CreateActionBar {
  constructor(icon, onClick, size = 'big', appearance = 'minimal', color = 'primary', ) {
    this.icon = icon;
    this.onClick = onClick;
    this.size = size;
    this.appearance = appearance;
    this.color = color;
  }
}
export default CreateActionBar;