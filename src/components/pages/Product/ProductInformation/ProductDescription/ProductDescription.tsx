type PropsType = {
    title: string;
    html: string;
};

export const ProductDescription: React.FC<PropsType> = ({ title, html }) => {
    return (
        <>
            <h2 className="sectionTitle">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
    );
};
