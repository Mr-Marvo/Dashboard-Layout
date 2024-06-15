import { Checkbox, Col, Form, Input, Row, Typography } from "antd";
import SignInLayout from "./features/SignInLayout";
import ButtonGreenGradiant from "../components/common/button/ButtonGreenGradiant";
import { MailIcon, Pwd } from "../../../assets/images/png";
import PrivacyPolicy from "../components/signIn/PrivacyPolicy";
import { AppStores, AppStoresDiff } from "../components/signIn/AppStores";
import { useNavigate } from "react-router-dom";

const { Text, Link } = Typography;

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <SignInLayout>
        <div className="flex flex-col md:flex-row px-5 pb-10">
          <Row
            className="flex flex-col md:flex-row md:pt-5"
            gutter={8}
            md={{ gutter: 32 }}
          >
            <Col
              className="flex flex-col md:items-baseline md:justify-center pt-14"
              span={24}
              md={{ span: 12 }}
            >
              <Text className="font-bold text-blue-900 text-7xl">
                My Dashboard
              </Text>
              <AppStores />
            </Col>

            <Col
              className="pt-14 flex md:justify-end md:items-end"
              span={24}
              md={{ span: 12 }}
            >
              <div
                className={`p-5  md:px-10 md:py-7 bg-secondarySeven n rounded-lg w-full sm:w-[500px] md:w-[600px]`}
                style={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Text className="flex items-center justify-center text-[20px] font-semibold pb-10">
                  Log in to Continue
                </Text>
                <Form className="w-full">
                  <div className="flex flex-row gap-1 pb-1">
                    <img src={MailIcon} alt="mail" className="w-5" />
                    <p className="text-md font-medium">Email *</p>
                  </div>
                  <Form.Item name="email" required>
                    <Input
                      size="large"
                      placeholder="Enter your email"
                      onKeyDown={(e) => {
                        const key = e.key;
                        if (
                          !/^[A-Za-z.@0-9]*$/.test(key) &&
                          key !== "Backspace"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      maxLength={100}
                    />
                  </Form.Item>

                  <div className="flex flex-row gap-1 pb-1">
                    <img src={Pwd} alt="mail" className="w-5" />
                    <Text className="text-md font-medium">Password *</Text>
                  </div>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Password is required!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Enter your password"
                      maxLength={60}
                    />
                  </Form.Item>

                  <div className="flex flex-row justify-between">
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      className="flex items-center justify-center"
                    >
                      <Checkbox>
                        <Text className="text-xs font-medium">Remember me</Text>
                      </Checkbox>
                    </Form.Item>

                    <Text
                      className="text-primary text-xs font-medium pt-[10px] cursor-pointer"
                      onClick={() => {
                        navigate("/reset-password/email");
                      }}
                      style={{ color: "var(--primary)" }}
                    >
                      Forgot Password?
                    </Text>
                  </div>

                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}
                  >
                    <ButtonGreenGradiant>Log in</ButtonGreenGradiant>
                  </Form.Item>
                </Form>

                <Text className="flex items-center justify-center">
                  Don’t have a company?
                  <Link style={{ color: "var(--primary)" }} href="/signup">
                    &nbsp; &nbsp;Sign up
                  </Link>
                </Text>

                <PrivacyPolicy />
              </div>
            </Col>
          </Row>
          <AppStoresDiff />
        </div>
      </SignInLayout>
    </>
  );
};

export default SignIn;
