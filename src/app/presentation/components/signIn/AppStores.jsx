import React from "react";
import { Col, Row, Typography } from "antd";
import { AppStore } from "../../../../assets/svg/signIn/AppStore";
import PlayStore from "../../../../assets/svg/signIn/PlayStore";
const { Text } = Typography;

const AppStores = () => {
  return (
    <div className="hidden pt-20 md:block">
      <div>
        <Text className="text-xs flex justify-center items-center">
          Download Mobile app
        </Text>
        <div className="flex flex-row pt-3 gap-3">
          <AppStore />
          <PlayStore />
        </div>
      </div>
    </div>
  );
};

const AppStoresDiff = () => {
  return (
    <Row className="flex justify-center items-center">
      <Col className="flex justify-center items-center pt-10 pb-10 md:hidden">
        <div>
          <Text className="text-xs flex justify-center items-center">
            Download Mobile app
          </Text>
          <div className="flex flex-row pt-3 gap-3">
            <AppStore />
            <PlayStore />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export { AppStores, AppStoresDiff };
