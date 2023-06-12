import React, { useRef, useState, useEffect } from "react";
import { DraggableCore } from "react-draggable";
import debounce from "lodash.debounce";
import $ from "cash-dom";
import classNames from "classnames/bind";
import style from "./ResizePanel.module.css";
let cx = classNames.bind(style);

const ResizePanel = ({ direction, style, handleClass, borderClass, children }) => {
  const [size, setSize] = useState(0);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);
  const validateSize = debounce(handleValidateSize, 100);

  const issHorizontal = () => direction === "w" || direction === "e";

  useEffect(() => {
    const content = contentRef.current;
    const actualContent = content.children[0];
    let initialSize = isHorizontal()
      ? $(actualContent).outerWidth(true)
      : $(actualContent).outerHeight(true);

    setSize(initialSize);
    validateSize();
  }, []);

  function handleValidateSize() {
    const isHorizontal = isHorizontal();
    const content = contentRef.current;
    const wrapper = wrapperRef.current;
    const actualContent = content.children[0];
    let containerParent = wrapper.parentElement;

    let minSize = isHorizontal
      ? actualContent.scrollWidth
      : actualContent.scrollHeight;

    let margins = isHorizontal
      ? $(actualContent).outerWidth(true) - $(actualContent).outerWidth()
      : $(actualContent).outerHeight(true) - $(actualContent).outerHeight();
    minSize += margins;

    if (size !== minSize) {
      setSize(minSize);
    } else {
      let overflow = isHorizontal
        ? containerParent.scrollWidth - containerParent.clientWidth
        : containerParent.scrollHeight - containerParent.clientHeight;

      if (overflow) {
        setSize(
          isHorizontal
            ? actualContent.clientWidth - overflow
            : actualContent.clientHeight - overflow
        );
      }
    }
  }

  function handleDrag(e, ui) {
    const factor = direction === "e" || direction === "s" ? -1 : 1;
    let delta = isHorizontal() ? ui.deltaX : ui.deltaY;
    setSize((prevSize) => Math.max(10, prevSize - delta * factor));
  }

  function handleDragEnd() {
    validateSize();
  }

  const dragHandlers = {
    onDrag: handleDrag,
    onStop: handleDragEnd,
  };

  const isHorizontal = isHorizontal();
  let containerClass = cx({
    ContainerHorizontal: isHorizontal,
    ContainerVertical: !isHorizontal,
  });

  if (containerClass) {
    containerClass += ` ${containerClass}`;
  }

  let containerStyle = { ...style } || {};
  if (size !== 0) {
    containerStyle.flexGrow = 0;
    containerStyle[isHorizontal ? "width" : "height"] = "auto";
  }

  let handleClasses =
    handleClass ||
    cx({
      ResizeHandleHorizontal: isHorizontal,
      ResizeHandleVertical: !isHorizontal,
    });

  let resizeBarClasses =
    borderClass ||
    cx({
      ResizeBarHorizontal: isHorizontal,
      ResizeBarVertical: !isHorizontal,
    });

  let contentStyle = isHorizontal
    ? { width: size + "px" }
    : { height: size + "px" };
  let contentClassName = cx("ResizeContent", {
    ResizeContentHorizontal: isHorizontal,
    ResizeContentVertical: !isHorizontal,
  });

  let content = (
    <div key="content" ref={contentRef} className={contentClassName} style={contentStyle}>
      {React.Children.only(children)}
    </div>
  );

  let handle = (
    <DraggableCore key="handle" {...dragHandlers}>
      <div className={resizeBarClasses}>
        <div className={handleClasses}>
          <span />
        </div>
      </div>
    </DraggableCore>
  );

  if (direction === "w" || direction === "n") {
    content = [handle, content];
  } else {
    content = [content, handle];
  }

  return (
    <div ref={wrapperRef} className={containerClass} style={containerStyle}>
      {content}
    </div>
  );
};

export default ResizePanel;
