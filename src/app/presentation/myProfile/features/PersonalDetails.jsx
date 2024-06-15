import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import PhoneInput from "antd-phone-input";
import LocationIcon from "../../../../assets/images/svg/LocationIcon";
import PhoneIcon from "../../../../assets/svg/myProfile/PhoneIcon";
import CalendarIcon from "../../../../assets/svg/myProfile/CalendarIcon";
import DesignationIcon from "../../../../assets/svg/myProfile/DesignationIcon";
import User from "../../../../assets/svg/myProfile/User";
import CountryIcon from "../../../../assets/svg/myProfile/CountryIcon";

const { Text } = Typography;

const PersonalDetails = () => {
  return (
    <div className="flex w-full lg:px-4">
      <Form className="w-full">
        <div className="flex w-full flex-col">
          <div className="py-4">
            <Text className="primary-button">Personal Details</Text>
          </div>

          <Row gutter={8}>
            <Col span={24} sm={{ span: 12 }}>
              <div className="flex flex-row gap-1 pb-2">
                <User />
                <p className="text-md font-medium">First name *</p>
              </div>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "First name is required!",
                  },
                ]}
                className="mb-2"
              >
                <Input placeholder="John" size="large" maxLength={60} />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <PhoneIcon className="mt-1 mr-1" />
                <p className="text-md font-medium">Phone number</p>
              </div>
              <Form.Item
                name="phoneNumber"
                className="mb-2"
                //rules={[{ required: false }]}
              >
                <PhoneInput
                  size="large"
                  minLength={6}
                  placeholder="0000000000"
                  enableSearch
                />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <DesignationIcon />
                <p className="text-md font-medium">Designation</p>
              </div>
              <Form.Item name="designation" className="mb-2">
                <Input placeholder="Designation" size="large" maxLength={60} />
              </Form.Item>
            </Col>
            <Col span={24} sm={{ span: 12 }}>
              <div className="flex flex-row gap-1 pb-2">
                <User />
                <p className="text-md font-medium">Last name</p>
              </div>
              <Form.Item
                name="lastName"
                className="mb-2"
                rules={[
                  {
                    pattern: /^([^0-9]*)$/,
                    message: "Last Name is invalid!",
                  },
                ]}
              >
                <Input placeholder="Doe" maxLength={60} size="large" />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <CalendarIcon />
                <p className="text-md font-medium">Date of Birth</p>
              </div>
              <Form.Item name="birthday" className="mb-2">
                <DatePicker
                  placeholder="Date of Birth"
                  size="large"
                  className="w-full"
                  format="DD MMM YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div className="flex w-full flex-col">
          <div className="py-4">
            <Text className="primary-button">Address </Text>
          </div>

          <Row gutter={8}>
            <Col span={24} sm={{ span: 12 }}>
              <div className="flex flex-row gap-1 pb-2">
                <LocationIcon />
                <p className="text-md font-medium">Address line 01</p>
              </div>
              <Form.Item name="address1" className="mb-2">
                <Input
                  size="large"
                  placeholder="Address line 01"
                  maxLength={60}
                />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <LocationIcon />
                <p className="text-md font-medium">City or suburb</p>
              </div>
              <Form.Item name="city" className="mb-2">
                <Input
                  placeholder="City or suburb"
                  size="large"
                  maxLength={60}
                />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <LocationIcon />
                <p className="text-md font-medium">State or province</p>
              </div>
              <Form.Item name="state" className="mb-2">
                <Input
                  size="large"
                  maxLength={60}
                  placeholder="State or province"
                />
              </Form.Item>
            </Col>
            <Col span={24} sm={{ span: 12 }}>
              <div className="flex flex-row gap-1 pb-2">
                <LocationIcon />
                <p className="text-md font-medium">Address line 02</p>
              </div>
              <Form.Item name="address2" className="mb-2">
                <Input
                  placeholder="Address line 02"
                  size="large"
                  maxLength={60}
                />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <LocationIcon />
                <p className="text-md font-medium">Postal code</p>
              </div>
              <Form.Item name="postalCode" className="mb-2">
                <Input size="large" maxLength={10} placeholder="Postal code" />
              </Form.Item>

              <div className="flex flex-row gap-1 pb-2">
                <CountryIcon />
                <p className="text-md font-medium">Country</p>
              </div>
              <Form.Item name="country" className="mb-2">
                <Select
                  size="large"
                  placeholder="Select Country"
                  showSearch
                ></Select>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Form.Item className="flex items-center justify-center py-6">
          <Button type="primary" htmlType="submit" size="large">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetails;
