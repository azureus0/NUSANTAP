import React from "react";

export default function GridBox({
    items = [],
    cols = 2,
    gap = "gap-3",
    renderItem,
}) {
    return (
        <div className={`grid grid-cols-${cols} ${gap}`}>
            {items.map((item, idx) => (
                <div key={idx} className="relative w-full pb-[100%] rounded-[12px] overflow-hidden">
                    {renderItem ? renderItem(item, idx) : null}
                </div>
            ))}
        </div>
    );
}
