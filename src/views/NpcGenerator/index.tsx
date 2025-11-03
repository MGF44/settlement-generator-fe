import { FormSwitch } from "@/components/form/FormSwitch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { AgeGroupField } from "./components/AgeGroupField";
import { SpeciesSelector } from "./components/SpeciesSelector";
import { useNpcGeneratorForm } from "./hooks/useNpcGeneratorForm";
import { useState } from "react";
import { Npc } from "@/types/npc.interface";
import { GeneratedNpcDialog } from "./components/GeneratedNpcCard";

const NpcGeneratorView = () => {
  const [generatedNpc, setGeneratedNpc] = useState<Npc>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { form, onSubmit } = useNpcGeneratorForm({
    onSuccess: onSuccessGenerate,
  });

  function onSuccessGenerate(npc: Npc) {
    setGeneratedNpc(npc);
    setIsDialogOpen(true);
  }

  return (
    <div className="flex-1 flex justify-center items-center gap-4 p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="gap-0 max-w-2xl">
            <CardHeader>
              <CardTitle>Select the Modifiers</CardTitle>
            </CardHeader>

            <CardContent className="py-4 px-6 flex flex-col gap-8">
              <SpeciesSelector />

              <AgeGroupField />

              <div className="flex flex-col gap-4">
                <Label>Optional Traits</Label>

                <div className="flex flex-col gap-2">
                  <FormSwitch
                    name="randomProfession"
                    label="Assign Random Profession"
                  />

                  <FormSwitch name="randomClass" label="Assign Random Class" />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" className="w-full cursor-pointer mt-4">
                Generate NPC
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <GeneratedNpcDialog
        isOpen={isDialogOpen}
        npcData={generatedNpc}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export { NpcGeneratorView };
