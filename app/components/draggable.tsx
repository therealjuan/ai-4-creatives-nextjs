import { useDraggable } from '@dnd-kit/core';

interface DraggableProps {
    children: React.ReactNode;
    id: string;
}

export default function Draggable ({ id, children }: DraggableProps) {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id
      });
    
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;

    return (
        <div style={style} ref={setNodeRef} {...listeners} {...attributes}>
            {children}
        </div>
    )
}