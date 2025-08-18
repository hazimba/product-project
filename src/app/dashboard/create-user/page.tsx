import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import FormCreate from "./FormCreate";

const PageDataForm = () => {
  return (
    <div className="m-4 flex flex-col justify-center gap-4">
      <div className="">Create User</div>
      <FormCreate />
      <Link href="/dashboard" className="text-blue-400 mt-4 inline-block">
        <LeftOutlined /> Back
      </Link>
    </div>
  );
};
export default PageDataForm;
