const TechUsed = ({ tools }: {tools: string[]}) => {
    return (
        <div>
            {tools.map((tool) => (
            <span>{tool} </span>
            ))}
        </div>
    );
}

export default TechUsed;
