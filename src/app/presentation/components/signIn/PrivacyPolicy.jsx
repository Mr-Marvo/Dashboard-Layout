import { Typography } from "antd";
const { Text } = Typography;

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-row justify-between pt-5 gap-3">
      <Text className="text-[10px]" style={{ color: "var(--secondary-two)" }}>
        . Terms & Conditions
      </Text>

      <Text className="text-[10px]" style={{ color: "var(--secondary-two)" }}>
        © 2023 Mr Marvo
      </Text>
      <Text className="text-[10px]" style={{ color: "var(--secondary-two)" }}>
        . Privacy Policy
      </Text>
    </div>
  );
};

export default PrivacyPolicy;
