import { Avatar, Typography, Flex } from "antd";
import { QuestionOutlined } from "@ant-design/icons";
const { Text } = Typography;
import "./index.css";

const AvatarCard = (props) => {
  const attr = {
    size: 64,
    ...(props.name
      ? { src: `./src/assets/imgs/${props.name.toLowerCase()}.png` }
      : { icon: <QuestionOutlined /> }),
  };
  return (
    <>
      <Avatar {...attr} className={props.selected ? "selected" : ""} />
      <Text style={{ fontSize: "0.8em" }}>
        {props.name ? props.name : "Random"}
      </Text>
    </>
  );
};

export default function SpeciesCard(props) {
  const { name, selected } = props;

  return (
    <Flex
      vertical
      align="center"
      className={`btn-species`}
      onClick={() => props.click(name)}
    >
      <AvatarCard name={name} click={props.click} selected={selected} />
    </Flex>
  );
}
