import { useContext } from "react";
import { GeneratedContext } from "../../contexts/generated-context";
import { Typography, Space } from "antd";
const { Text, Title } = Typography;
export default function GeneratorResult() {
  const state = useContext(GeneratedContext);
  const npcInfo = () => {
    if (!state.npc) return "";
    return (
      <Space direction="vertical" style={{ margin: "2%" }}>
        <Title level={4} style={{ margin: 0 }}>
          Generated NPC:
        </Title>
        <Space size={2}>
          <Text strong>Name:</Text> <Text>{state.npc.name}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Gender: </Text> <Text>{state.npc.gender}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Species: </Text> <Text>{state.npc.species}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Age: </Text> <Text>{state.npc.age}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Eye color: </Text> <Text>{state.npc.eyes}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Hair color: </Text> <Text>{state.npc.hair}</Text>
        </Space>
        <Space size={2}>
          <Text strong>Skin color: </Text> <Text>{state.npc.skin}</Text>
        </Space>
      </Space>
    );
  };

  return <>{npcInfo()}</>;
}
