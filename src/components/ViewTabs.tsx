import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useViewTab } from "@/hooks/useViewTab";

const ViewTabs = () => {
  const { tabs, ContentByTab } = useViewTab();

  return (
    <Tabs defaultValue="npc" className="gap-0 min-h-svh">
      <TabsList className="rounded-none w-full h-16 p-0 bg-card sticky top-0 z-10">
        {Object.entries(tabs).map(([key, { Icon, label }]) => (
          <TabsTrigger
            key={key}
            value={key}
            className="border-0 border-b-2 border-border rounded-none cursor-pointer data-[state=active]:text-amber-700 data-[state=active]:border-b-4 data-[state=active]:border-amber-800 hover:text-amber-600"
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(ContentByTab).map(([key, content]) => (
        <TabsContent key={key} value={key} className="flex-1 flex">
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export { ViewTabs };
