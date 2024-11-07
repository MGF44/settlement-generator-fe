import { Box } from "@mui/material";
import "./App.scss";
import FormPage from "./pages/form/Form";
import SettlementPage from "./pages/settlement/Settlement";
import { FormProvider } from "./providers/FormProvider";
import { SettlementProvider } from "./providers/SettlementProvider";
import SettlementData from "./services/settlement-data";
import SettlementOptions from "./types/settlement-options";

function App() {
  const service = SettlementData();
  const onSubmit = (opt: SettlementOptions) => {
    service.genSettlement(opt);
  };
  return (
    <Box className="master-container">
      <>
        <FormProvider>
          <FormPage submit={onSubmit} service={service} />
        </FormProvider>
      </>
      <>
        <SettlementProvider>
          <SettlementPage />
        </SettlementProvider>
      </>
    </Box>
  );
}

export default App;
