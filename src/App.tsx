import { useCallback } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import {} from "file-to-any";

const { Dragger } = Upload;

function App() {
  const handleChange = useCallback(e => {
    const { file } = e;
    const blob = new Blob([file]);
    const stream = blob.stream();
    const reader = stream.getReader();
  }, []);

  const handleCustomRequest = useCallback(e => {
    const { onSuccess } = e;
    onSuccess();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Dragger
        fileList={[]}
        customRequest={handleCustomRequest}
        onChange={handleChange}
        style={{ padding: 20 }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </div>
  );
}

export default App;
