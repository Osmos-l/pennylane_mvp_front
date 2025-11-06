const IngredientItemSkeleton = () => {
    return (
        <div className="mb-3 d-flex align-items-start border rounded shadow-sm bg-white recipe-item">
            <div
                className="mb-2"
                style={{
                    width: "70%",
                    height: 20,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 4,
                }}
            ></div>
        </div>
    );
};

export default IngredientItemSkeleton;
