import Article from "./Article";

const Articles = () => {
  return (
    <div className="bg-blue-950 p-2">
      <p className="italic text-center text-purple-600 text-xl">Blogs & News</p>
      <h1 className="text-center text-white text-3xl font-bold">
        Our Latest News and Articles
      </h1>
      <div className="flex flex-wrap justify-evenly items-center p-4">
        <Article
          img="src/assets/dance-bg.jpg"
          header="10 Tips For Taking Online Classic Dance Classes"
        />
        <Article
          img="src/assets/dance-bg.jpg"
          header="10 Tips For Taking Online Classic Dance Classes"
        />
        <Article
          img="src/assets/dance-bg.jpg"
          header="10 Tips For Taking Online Classic Dance Classes"
        />
      </div>
    </div>
  );
};

export default Articles;
