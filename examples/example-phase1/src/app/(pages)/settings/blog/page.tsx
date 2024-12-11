
const Blog = ({ params }: any) => {
    const { slug } = params;

    return (
        <>
            <h1>Blog page</h1>
            <div>Blog: {slug}</div>
        </>
    );
};

export default Blog;
