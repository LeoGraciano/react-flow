import { Handle, NodeProps, Position } from "reactflow";

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-[200px] h-[200px]">
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        className="-left-5 w-3 h-3 bg-blue-400/80"
      />
    </div>
  );
}
