//@ts-nocheck
import { FC } from 'react';
import { Form, Button } from 'antd';
import {
  SuperColor,
  SuperSeleter,
  SuperText,
  SuperUpload,
} from '../../../../components/compConfigForm';

interface EditorConfigFormProps {
  compSchema: any;
}

// 思路：根据comp schema 渲染配置表单
const EditorConfigForm: FC<EditorConfigFormProps> = ({ compSchema }) => {
  const { config, defaultConfig } = compSchema;

  return (
    Array.isArray(config) &&
    config.length > 0 && (
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {config.map(({ name, format, label }) => {
          let SuperFormItem;
          switch (format) {
            case 'text':
              SuperFormItem = SuperText;
              break;
            case 'color':
              SuperFormItem = SuperColor;
              break;
            case 'seleter':
              SuperFormItem = SuperSeleter;
              break;
            case 'upload':
              SuperFormItem = SuperUpload;
              break;

            default:
              break;
          }

          return (
            <Form.Item key={name} label={label} name={name}>
              {SuperFormItem({ defaultConfig: defaultConfig[name] })}
            </Form.Item>
          );
        })}
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    )
  );
};

export default EditorConfigForm;
