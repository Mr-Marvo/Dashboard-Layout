import { Button, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

const colors1 = ["#2CC0FF", "#5AFF20"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());

const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const ButtonGreenGradiant = ({ ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(135deg, ${colors1.join(", ")})`,
            colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
              colors1
            ).join(", ")})`,
            colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
              colors1
            ).join(", ")})`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        type="primary"
        {...props}
        className="w-full"
        size="large"
        htmlType="submit"
      ></Button>
    </ConfigProvider>
  );
};

export default ButtonGreenGradiant;
