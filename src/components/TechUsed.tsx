const TechUsed = ({ tools }) => {
    return (
        <div>
            {tools.map((tool) => (
            <span>{tool} </span>
            ))}
        </div>
    );
}

export default TechUsed;
