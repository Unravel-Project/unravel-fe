import BasePage from "@/components/Playground/BasePage";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/Accordion";

const content = [
    {
        id: 'time-1',
        title: 'This is title Accordion 1',
        description: 'This is description Accordion 1'
    },
    {
        id: 'time-2',
        title: 'This is title Accordion 2',
        description: 'This is description Accordion 2'
    },
    {
        id: 'time-3',
        title: 'This is title Accordion 3',
        description: 'This is description Accordion 3'
    },
    {
        id: 'time-4',
        title: 'This is title Accordion 4',
        description: 'This is description Accordion 4'
    }
]

const AccordionPage = () => {
    return (
        <BasePage
            pageTitle="Accordion"
            pageDescription="Displays a accordion or a component that looks like a accordion."
            docUrl="https://ui.shadcn.com/docs/components/accordion"
        >
            <div className="flex flex-col space-y-3">
                <Accordion type="single" collapsible className="w-full">
                    {content.map(x => (
                        <AccordionItem key={x.id} value={x.id}>
                            <AccordionTrigger>{x.title}</AccordionTrigger>
                            <AccordionContent>
                                {x.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </BasePage>
    )
}

export default AccordionPage;
