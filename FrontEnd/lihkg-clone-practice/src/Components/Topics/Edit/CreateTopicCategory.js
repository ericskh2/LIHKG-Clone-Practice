import CategoryData from '../CategoryList/CategoryData'

function CreateTopicCategory(){
    let categories = CategoryData();
    let gen = [];
    for(var key in categories){
        gen.push(<option value={key}>{categories[key]}</option>)
    };
    return gen;
}

export default CreateTopicCategory