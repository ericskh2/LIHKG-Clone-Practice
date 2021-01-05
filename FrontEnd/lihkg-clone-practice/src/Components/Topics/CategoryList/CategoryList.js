import Category from './Category'

function CategoryList(props){
    const categories = {
        1: "吹水台",
        2: "校園台",
        3: "軟件台",
        4: "講故台"
    }
    function generateCategories(){
        console.log(categories);
        let gen = [];
        for(var key in categories){
            gen.push(<Category catnum={key} category={categories[key]} />);
        }
        return gen;
    }
    console.log(props.show)
    if(props.show){
        return (
            <div className="position-absolute zindex-sticky bg-white min-vh-100 pt-5 ml-2 pl-5">
                <div className="row">
                {generateCategories()}
                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }

}

export default CategoryList