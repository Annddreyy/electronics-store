import { BasePage } from './BasePage';

export const BasePageWithContainer: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <BasePage>
            <div className="container">{children}</div>
        </BasePage>
    );
};
