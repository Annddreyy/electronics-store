type Props = {
    title: string;
    html: string;
};

export const ProductDescription: React.FC<Props> = ({ title, html }) => {
    return (
        <>
            <h2 className="sectionTitle">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
    );
};
