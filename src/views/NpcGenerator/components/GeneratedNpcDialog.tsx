import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import { Npc } from "@/types/npc.interface";

interface GeneratedNpcDialogProps {
  isOpen: boolean;
  npcData?: Npc;
  onClose?: () => void;
}

const GeneratedNpcDialog = ({
  isOpen,
  npcData,
  onClose,
}: GeneratedNpcDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="min-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Generated NPC Details</AlertDialogTitle>
        </AlertDialogHeader>

        {npcData ? (
          <div className="grid grid-cols-2 gap-4">
            <p className="flex flex-col">
              Name <span className="font-bold capitalize text-lg">{npcData?.name}</span>
            </p>
            <p className="flex flex-col">
              Species{" "}
              <span className="font-bold capitalize text-lg">{npcData?.species}</span>
            </p>
            <p className="flex flex-col">
              Gender <span className="font-bold capitalize text-lg">{npcData?.gender}</span>
            </p>
            <p className="flex flex-col">
              Hair <span className="font-bold capitalize text-lg">{npcData?.hair}</span>
            </p>
            <p className="flex flex-col">
              Eyes <span className="font-bold capitalize text-lg">{npcData?.eyes}</span>
            </p>
            <p className="flex flex-col">
              Skin <span className="font-bold capitalize text-lg">{npcData?.skin}</span>
            </p>
            <p className="flex flex-col">
              Age <span className="font-bold capitalize text-lg">{npcData?.age}</span>
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <Spinner className="h-16 w-16" />
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { GeneratedNpcDialog };
