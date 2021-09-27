import html2canvas from 'html2canvas';

/**
 * 将dom绘制成图片
 * @param {*} node dom节点
 * @returns img 类型 base 64
 */
export const domToImg = async (node) => {
  const canvas = await html2canvas(node.current, {
    useCORS: true,
    logging: false,
    scale: 3,
  });
  return canvas.toDataURL('image/jpg', 1);
};
