const RecipeItemSkeleton = () => {
    return (
        <div className="mb-3 d-flex align-items-start border rounded shadow-sm bg-white recipe-item">
            <div
                className="rounded me-3"
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#e0e0e0",
                    flexShrink: 0,
                }}
            ></div>

            <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                <div
                    className="mb-2"
                    style={{
                        width: "70%",
                        height: 20,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 4,
                    }}
                ></div>

                <div className="d-flex gap-3 text-muted mt-2">
                    <div
                        className="d-flex align-items-center"
                        style={{
                            width: 60,
                            height: 16,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 4,
                        }}
                    ></div>
                    <div
                        className="d-flex align-items-center"
                        style={{
                            width: 60,
                            height: 16,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 4,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default RecipeItemSkeleton;
