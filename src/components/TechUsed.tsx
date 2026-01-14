const TechUsed = ({ tools }: {tools: string[]}) => {
    return (
        <div className="absolute bottom-6 mr-4">
            {tools.map((tool) => (
            <span>{tool} </span>
            ))}
        </div>
    );
}

export default TechUsed;
