import { FC } from 'react';
import { Button } from 'antd';
import { saveSchema } from '@/server';
import './index.less';
interface EditorProps {
  currentCacheCopm: any;
}

const Editor: FC<EditorProps> = ({ currentCacheCopm }) => {
  const openPreView = async () => {
    try {
      await saveSchema({ currentCacheCopm });
    } catch (error) {
      console.error(error);
    }
    window.open('http://localhost:3000/#/view', '_blank');
  };

  return (
    <div className="editor-top">
      {/* 先占个位置 */}
      <div></div>
      <div className="editor-top-title">可视化编辑器——superH5</div>
      <div className="editor-top-operation">
        <Button onClick={openPreView} type="primary" className="btn">
          预览
        </Button>
        <Button type="primary" className="btn">
          保存
        </Button>
        <Button type="primary" className="btn">
          导入
        </Button>
        <Button type="primary" className="btn">
          下载
        </Button>
      </div>
    </div>
  );
};

export default Editor;
