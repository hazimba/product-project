import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import type { CollapseProps } from "antd";

// Dummy upload request for AntD Upload
const dummyRequest = ({ onSuccess }: any) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

export const collapseItem: CollapseProps["items"] = [
  {
    key: "1",
    label: "User Details",
    children: (
      <div className="flex gap-4">
        <Form.Item label="Email" name="email" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" className="flex-1">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="" className="flex-1"></Form.Item>
      </div>
    ),
  },
  {
    key: "2",
    label: "Page Details",
    children: (
      <div className="flex gap-4">
        <Form.Item label="Title" name="title" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item label="Subtitle" name="subtitle" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" className="flex-1">
          <Input />
        </Form.Item>
      </div>
    ),
  },
  {
    key: "3",
    label: "Media Social Links",
    children: (
      <div className="flex gap-4">
        <Form.Item
          label="Facebook Link"
          name="facebook_link"
          className="flex-1"
        >
          <Input />
        </Form.Item>
        <Form.Item label="Twitter Link" name="twitter_link" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item label="Instagram Link" name="insta_link" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item label="Other Link" name="other_link" className="flex-1">
          <Input />
        </Form.Item>
      </div>
    ),
  },
  {
    key: "4",
    label: "Company Details",
    children: (
      <div className="flex gap-4">
        <Form.Item label="Name" name="company_name" className="flex-1">
          <Input />
        </Form.Item>
        <Form.Item
          label="Number"
          name="contact_number_other"
          className="flex-1"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact Number"
          name="contact_number"
          className="flex-1"
        >
          <Input />
        </Form.Item>
      </div>
    ),
  },
  {
    key: "5",
    label: "Image Uploads",
    children: (
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <Form.Item
            key={i}
            name={`image_url_${i + 1}`}
            label={`Image ${i + 1}`}
          >
            <Upload
              customRequest={dummyRequest}
              listType="picture"
              maxCount={1}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        ))}
        <Form.Item name="icon_url" label="Icon URL">
          <Upload
            customRequest={dummyRequest}
            listType="picture"
            maxCount={1}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </div>
    ),
  },
];
