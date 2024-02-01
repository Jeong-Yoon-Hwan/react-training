import styles from "./index.module.css";
import { useRef, useState } from "react";

export const DragPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragItemRef = useRef<HTMLDivElement>(null);
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 });
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });

  const handleDragStart = (e: any) => {
    const blankCanvas: any = document.createElement("canvas");
    blankCanvas.classList.add("canvas");
    e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
    document.body?.appendChild(blankCanvas);
    e.dataTransfer.effectAllowed = "move";
    const originPosTemp = { ...originPos };
    originPosTemp["x"] = e.target.offsetLeft;
    originPosTemp["y"] = e.target.offsetTop;
    console.log("originPosTemp", originPosTemp);
    setOriginPos(originPosTemp);
    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };
  const handleDrag = (e: any) => {
    const PosTemp = { ...pos };
    PosTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
    PosTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(PosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };
  const handleDragEnd = (e: any) => {
    if (!isInsideDragArea(e)) {
      const posTemp = { ...pos };
      posTemp["left"] = originPos.x;
      posTemp["top"] = originPos.y;
      setPos(posTemp);
    }
    // 캔버스 제거
    const canvases = document.getElementsByClassName("canvas");
    for (let i = 0; i < canvases.length; i++) {
      let canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }
    // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
    document.body.removeAttribute("style");
  };
  const isInsideDragArea = (e) => {
    const containerElement = containerRef.current;
    const dragItemElement = dragItemRef.current;

    if (!containerElement || !dragItemElement) {
      return false; // 레퍼런스가 없으면 false를 반환
    }

    const containerRect = containerElement.getBoundingClientRect();
    const dragItemRect = dragItemElement.getBoundingClientRect();

    const isInsideX = dragItemRect.left >= containerRect.left && dragItemRect.right <= containerRect.right;
    const isInsideY = dragItemRect.top >= containerRect.top && dragItemRect.bottom <= containerRect.bottom;

    return isInsideX && isInsideY;
  };
  return (
    <div className={styles.root} ref={containerRef}>
      <div className={styles.dragItems}>
        <div
          className={styles.item}
          ref={dragItemRef}
          draggable
          onDragStart={(e) => handleDragStart(e)}
          onDrag={(e) => handleDrag(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDragEnd={(e) => handleDragEnd(e)}
          style={{ left: pos.left, top: pos.top, position: "absolute" }}
        >
          드래그
        </div>
      </div>
      <div className={styles.dropZone}>
        <div className={styles.dropBox}>영역</div>
      </div>
    </div>
  );
};
