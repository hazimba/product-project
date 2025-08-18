import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";

import SignOut from "@/components/signout";
import { Button, Image } from "antd";
import Link from "next/link";

const Dashboard = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await data.json();

  console.log("Product data:", products);

  return (
    <div className="m-2 flex flex-col gap-5">
      {/* sub-header */}
      <div className="w-full border-1 rounded p-2 flex justify-between items-center">
        <Image
          width={100}
          height={50}
          alt="Logo"
          style={{ objectFit: "contain" }}
          src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png"
        />
        <div>Limited time offer, Buy XTRA WordPress theme only $37</div>
        <Button>Contact Us!</Button>
      </div>
      {/* header-option */}
      <div className="w-full p-2 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Product Dashboard</h2>
        </div>
        <div className="flex gap-4 items-center">
          <div>Product</div>
          <Link href="/dashboard/create-user">
            <UserOutlined />
          </Link>
          <SignOut />
        </div>
      </div>
      {/* header */}
      {/* <div className="w-full p-2 bg-red-200">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm">Welcome to your dashboard</p>
      </div> */}
      {/* main content */}
      <div className="w-full h-screen p-2 border-2 p-4 flex justify-center items-center flex-col gap-4">
        <div className="text-3xl">XTRA Camping Adventures</div>
        <div className="text-center text-sm">
          Welcome to XTRA, This is an text section and you can definitely edit
          it and Social Network icons that you will use. The demo uses Playfair
          Display font for headings and Open Sans for the body text.
        </div>
        <div className="flex gap-4 justify-center items-center">
          <FacebookOutlined />
          <InstagramOutlined />
          <TwitterOutlined />
        </div>
        <div className="flex flex-wrap justify-center items-start gap-4">
          <div className="flex flex-col gap-2">
            <Image
              width={200}
              height={300}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              height={300}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              height={300}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
              width={200}
              alt=""
              style={{ objectFit: "cover" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="w-full p-2 bg-red-400">Footer</div>
    </div>
  );
};
export default Dashboard;
