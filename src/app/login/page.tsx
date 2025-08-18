"use client";
import { createClient } from "@supabase/supabase-js";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const LoginForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    console.log("Form values:", values);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        console.error("Login error:", error);
        return;
      }

      console.log("Login successful:", data);

      if (data.session && data.session.user) {
        console.log("User logged in:", data.session.user);
        router.push("/dashboard");
      } else {
        console.error("No user session found after login.");
        return;
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
    }
    setLoading(false);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="login"
      onFinish={onFinish}
      style={{ maxWidth: 400, margin: "0 auto", marginTop: 50 }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
