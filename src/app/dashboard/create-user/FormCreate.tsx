"use client";
import { Button, Collapse, Form } from "antd";
import { collapseItem } from "./CollapseItem";
import { createClient } from "@supabase/supabase-js";

const FormCreate = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Form values:", values);

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: values.email,
        password: values.password,
      }
    );

    if (signUpError) {
      console.error("Sign up error:", signUpError);
      return;
    }
    console.log("Sign up data:", signUpData);

    const { image_urls, ...rest } = values;
    const imgData = image_urls || Array(9).fill("");

    const { data, error } = await supabase.from("pagedata").insert([
      {
        id: signUpData.user?.id,
        ...rest,
        // image_url_1: imgData[0],
        // image_url_2: imgData[1],
        // image_url_3: imgData[2],
        // image_url_4: imgData[3],
        // image_url_5: imgData[4],
        // image_url_6: imgData[5],
        // image_url_7: imgData[6],
        // image_url_8: imgData[7],
        // image_url_9: imgData[8],
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Inserted:", data);
      //   form.resetFields();
    }
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Collapse items={collapseItem} defaultActiveKey={["1"]} />
      <Form.Item style={{ marginTop: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormCreate;
