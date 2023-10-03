"use client";

import {useTranslations} from 'next-intl';

interface ToolCounterProps {
    total: number;
    selectedCategory?: string | undefined | null;
}

export const ToolCounter = ({
    total,
    selectedCategory
}: ToolCounterProps) => {

    const t = useTranslations('Index.tools');
    let totalString = total.toString();  // Convert total to string for concatenation purposes

    if (selectedCategory) {
        totalString = total.toString();
      } else {
        totalString = "all " + total;
      }
    
      // Decide whether to show "tool" or "tools"
      const toolString = total === 1 ? t("tool") : t("tools");
    

    return (
        <div className="py-4 text-2xl font-bold">{t("showing")} {totalString} {selectedCategory} {toolString}</div>
    )

}