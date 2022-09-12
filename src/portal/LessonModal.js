import React, { Component } from "react";
import { createPortal } from 'react-dom'

// 使用 createPortal 傳送門
// 子元件不會出現在 app 底下，而是另外一個跟app 同層元件 modal的裡面，突破組件數的限制

// 使用時機適合在父元件外渲染的一種方式，例如跳窗
class LessonModal extends Component {
  render() {
    return createPortal(
      <div>
        LessonModal
      </div>,
      document.getElementById('modal')
    )
  }
}

export default LessonModal;