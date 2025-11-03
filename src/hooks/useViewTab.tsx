import { RobotIcon } from "@/components/icons";
import { NpcGeneratorView } from "@/views/NpcGenerator";
import { SettlementGenerator } from "@/views/SettlementGenerator";
import { ShopGenerator } from "@/views/ShopGenerator";
import { HomeIcon, StoreIcon } from "lucide-react";

type TabKey = "npc" | "shop" | "settlement";

const tabs = {
  npc: { Icon: RobotIcon, label: "NPC Generator" },
  shop: { Icon: StoreIcon, label: "Shop Generator" },
  settlement: { Icon: HomeIcon, label: "Settlement Generator" },
};

const useViewTab = () => {
  const ContentByTab: Record<TabKey, React.ReactNode> = {
    npc: <NpcGeneratorView />,
    shop: <ShopGenerator />,
    settlement: <SettlementGenerator />,
  };

  return { tabs, ContentByTab };
};

export { useViewTab };
