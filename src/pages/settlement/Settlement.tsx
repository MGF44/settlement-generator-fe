import { useEffect } from "react";
import { SettlementDataStorage } from "../../services/settlement-data";
import SettlementOptions from "../../types/settlement-options";
import "./Settlement.scss";

function SettlementPage({
  options,
  service,
}: {
  options: SettlementOptions[];
  service: SettlementDataStorage;
}) {
  const fetchData = async (res: Promise<Response>) => {
    const reader = (await res).body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      console.log("Received", value);
    }
  };

  useEffect(() => {
    const [opt] = options;
    if (opt) {
      fetchData(service.genSettlement(opt));
    }
  }, [options]);
  return <div>test</div>;
}

export default SettlementPage;
