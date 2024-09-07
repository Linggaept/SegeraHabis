import Category from "@/components/Category";

const Categories = ({ params }: any) => {
    return (
        <div>
            <Category category={params.categories} />
        </div>
    );
};