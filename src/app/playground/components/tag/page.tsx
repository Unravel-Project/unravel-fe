'use client';

import BasePage from "@/components/Playground/BasePage";
import { Tag } from "@/components/ui/Tag";
import { useState } from "react";

const tagList = [
    { id: 1, name: 'tag 1' },
    { id: 2, name: 'tag 2' },
    { id: 3, name: 'tag 3' },
    { id: 4, name: 'tag 4' },
    { id: 5, name: 'tag 5' },
]

const TagPage = () => {
    const [selected, setSelected] = useState<number | undefined>();

    return (
        <BasePage
            pageTitle="Tag"
            pageDescription="Displays a tag or a component that looks like a tag."
            docUrl="https://ui.shadcn.com/docs/components/badge"
        >
            <div className="flex flex-col space-y-3">
                <div className="space-y-2">
                    <h3>Single Default - Primary - Secondary - Outline - Negative</h3>
                    <div className="flex gap-2">
                        <Tag variant="default">Default</Tag>
                        <Tag variant="primary">Primary</Tag>
                        <Tag variant="secondary">Secondary</Tag>
                        <Tag variant="outline">Outline</Tag>
                        <Tag variant="negative">Negative</Tag>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3>Override Style</h3>
                    <div className="flex gap-2">
                        <Tag variant="default" className="bg-orange-500 hover:bg-orange-500/50">Default</Tag>
                        <Tag variant="outline" className="border-orange-500 text-orange-500">Outline</Tag>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3>List Tag</h3>
                    <div className="flex gap-2">
                        {tagList.map(x => (
                            <Tag
                                key={x.id}
                                variant={selected === x.id ? 'primary' : 'default'}
                                onClick={() => setSelected(x.id)}
                            >
                                {x.name}
                            </Tag>
                        ))}
                    </div>
                </div>
            </div>
        </BasePage>
    )
}

export default TagPage;
