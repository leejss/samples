class Hub {}
class Drawer {
  static hub = new Hub();
  constructor() {}

  static renderDrawer() {
    // this.open = true;
  }
  static dismissDrawer() {
    // this.open = false;
  }

  static openDrawer() {
    this.renderDrawer();
    // Render drawer and await the vaue
    return new Promise((resolve) => {
      this.hub.on("data", (data) => {
        this.dismissDrawer();
        resolve(data);
      });
    });
  }
}

const handleClick = async () => {
  const result = await valueFromComponentB();
  // handleResult
};

const c = () => {
  // hub.emit("data", "hello");
  // dismiss the drawer
};
