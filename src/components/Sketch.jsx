
export default function Sketch(props, P5) {
  P5.setup = props.setup;
  P5.draw = props.draw;
  P5.windowResized = props.windowResized;
  P5.preload = props.preload;
  P5.mouseClicked = props.mouseClicked;
  P5.mouseMoved = props.mouseMoved;
  P5.doubleClicked = props.doubleClicked;
  P5.mousePressed = props.mousePressed;
  P5.mouseWheel = props.mouseWheel;
  P5.mouseDragged = props.mouseDragged;
  P5.mouseReleased = props.mouseReleased;
  P5.keyPressed = props.keyPressed;
  P5.keyReleased = props.keyReleased;
  P5.keyTyped = props.keyTyped;
  P5.touchStarted = props.touchStarted;
  P5.touchMoved = props.touchMoved;
  P5.touchEnded = props.touchEnded;
  P5.deviceMoved = props.deviceMoved;
  P5.deviceTurned = props.deviceTurned;
  P5.deviceShaken = props.deviceShaken;
  return (function init(sketch = this, id = 'root') {
    return new P5(sketch, id);
  });
}
/*
Props
  setup: Function
  draw: Function
  windowResized: Function
  preload: Function
  mouseClicked: Function
  mouseMoved: Function
  doubleClicked: Function
  mousePressed: Function
  mouseWheel: Function
  mouseDragged: Function
  mouseReleased: Function
  keyPressed: Function
  keyReleased: Function
  keyTyped: Function
  touchStarted: Function
  touchMoved: Function
  touchEnded: Function
  deviceMoved: Function
  deviceTurned: Function
  deviceShaken: Function

  is setup required true
  is draw required false
  is windowResized required false
  is preload required false
  is mouseClicked required false
  is mouseMoved required false
  is doubleClicked required false
  is mousePressed required false
  is mouseWheel required false
  is mouseDragged required false
  is mouseReleased required false
  is keyPressed required false
  is keyReleased required false
  is keyTyped required false
  is touchStarted required false
  is touchMoved required false
  is touchEnded required false
  is deviceMoved required false
  is deviceTurned required false
  is deviceShaken required false
*/
