import { RobotOutlined, ShopOutlined, HomeOutlined } from "@ant-design/icons";
import "./App.css";
import { Tabs } from "antd";
import NPCGenerator from "./components/npc-generator";
import { useReducer } from "react";
import generatedReducer from "./reducers/generated";
import {
  GeneratedContext,
  GeneratedDispatchContext,
} from "./contexts/generated-context";

function App() {
  const [state, dispatch] = useReducer(generatedReducer, { npc: {} });

  const tabs = [
    { Icon: RobotOutlined, label: "NPC Generator", Children: NPCGenerator },
    { Icon: ShopOutlined, label: "Shop Generator" },
    { Icon: HomeOutlined, label: "Settlement Generator" },
  ];

  const items = () => {
    const toItem = (label, key, Icon, Children) => ({
      label,
      key,
      icon: <Icon />,
      children: Children ? <Children /> : "Test",
    });
    return tabs.map((tb, ix) => toItem(tb.label, ix, tb.Icon, tb.Children));
  };

  return (
    <GeneratedContext.Provider value={state}>
      <GeneratedDispatchContext.Provider value={dispatch}>
        <Tabs defaultActiveKey="1" centered items={items()} />
      </GeneratedDispatchContext.Provider>
    </GeneratedContext.Provider>
  );
}

export default App;
