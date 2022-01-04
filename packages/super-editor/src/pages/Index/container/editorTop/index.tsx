import { FC, useState } from 'react';
import { Button, Modal, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { saveSchema, downloadSchema } from '@/server';
import './index.less';
interface EditorProps {
  currentCacheCopm: any;
}
// 文件上传props
const props = {
  name: 'file',
  action: 'http://localhost:8888/schema/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
       //@ts-ignore
      document.querySelector('#preview').contentWindow.postMessage({ currentCacheCopm:info.file.response?.data?.resData?.currentCacheCopm }, '*');
      
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Editor: FC<EditorProps> = ({ currentCacheCopm}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openPreView = async (type: number) => {
    try {
      await saveSchema({ currentCacheCopm });
    } catch (error) {
      console.error(error);
    }
    type === 1 && window.open('http://localhost:3000/#/view', '_blank');
  };

  /** 该功能暂时未完善 */
  const download = async () => {
    window.open('http://localhost:8888/db.txt')
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="editor-top">
      {/* 先占个位置 */}
      <div></div>
      <div className="editor-top-title">可视化编辑器——superH5</div>
      <div className="editor-top-operation">
        <Button onClick={() => openPreView(1)} type="primary" className="btn">
          预览
        </Button>
        <Button type="primary" className="btn" onClick={() => openPreView(2)}>
          保存
        </Button>
        <Button type="primary" className="btn" onClick={showModal}>
          导入
        </Button>
        <Button type="primary" className="btn" onClick={download}>
          下载
        </Button>
        <Modal
          title="导入组件json"
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Modal>
      </div>
    </div>
  );
};

export default Editor;
