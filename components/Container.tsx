type ContainerProps = {
    children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r">
            {children}
        </div>
    );
};