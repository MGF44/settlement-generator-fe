import { Box } from "@mui/material";
import "./App.scss";
import FormPage from "./pages/form/Form";
import SettlementPage from "./pages/settlement/Settlement";
import { FormProvider } from "./providers/FormProvider";
import { SettlementProvider } from "./providers/SettlementProvider";

function App() {
  return (
    <Box className="master-container">
      <>
        <FormProvider>
          <FormPage />
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
