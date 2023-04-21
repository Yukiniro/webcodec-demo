import { useCallback } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import {} from "file-to-any";

const { Dragger } = Upload;

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = useCallback(e => {
    const { file } = e;
    const originFileObj = file.originFileObj;

    (async () => {
      const stream = originFileObj.stream();
      const mediaStream = new MediaStream(stream);
      console.log(mediaStream);
    })();

    // (async () => {
    //   try {
    //     const stream = originFileObj.stream();
    //     const reader = stream.getReader();
    //     const config = {
    //       codec: "avc1.42E01E",
    //       codedHeight: 1080,
    //       codedWidth: 1920,
    //       optimizeForLatency: true,
    //     };
    //     const decoder: VideoDecoder = new VideoDecoder({
    //       output: frame => {},
    //       error: err => {},
    //     });
    //     await VideoDecoder.isConfigSupported(config);
    //     decoder.configure(config);

    //     while (true) {
    //       const { done, value: chunk } = await reader.read();
    //       if (done) {
    //         messageApi.info("done!");
    //         break;
    //       }
    //       decoder.decode(new EncodedVideoChunk())
    //       console.log(chunk);
    //     }
    //   } catch (e) {
    //     message.error(e.message);
    //   }
    // })();
  }, []);

  const handleCustomRequest = useCallback(e => {
    const { onSuccess } = e;
    onSuccess();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {contextHolder}
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
