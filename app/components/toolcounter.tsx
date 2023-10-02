interface ToolCounterProps {
    total: number;
    selectedCategory?: string | undefined | null;
}

export const ToolCounter = ({
    total,
    selectedCategory
}: ToolCounterProps) => {

    let totalString = total.toString();  // Convert total to string for concatenation purposes

    if (selectedCategory) {
        totalString = total.toString();
      } else {
        totalString = "all " + total;
      }
    
      // Decide whether to show "tool" or "tools"
      const toolString = total === 1 ? "tool" : "tools";
    

    return (
        <div className="py-4 text-2xl font-bold">Showing {totalString} {selectedCategory} {toolString}</div>
    )

}