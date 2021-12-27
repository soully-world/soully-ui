declare global {
  interface Navigator {
    msMaxTouchPoints: any;
  }
}
const isTouchDevice = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

export default isTouchDevice;
