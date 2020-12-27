import CreateTopicBar from './CreateTopicBar'

function CreateTopic() {
    return (
        <div className="createtopic overflow-hidden">
            <form>
                <div className="formgroup text-center mt-5">
                    <span className="h4">發表主題</span>
                    <button type="button" className="float-right mr-3">X</button>
                </div>
                <div className="formgroup row ml-5 pl-5 mt-5">
                    <select name="topic col-3" id="topic">
                        <option value="1">吹水台</option>
                        <option value="2">創意台</option>
                    </select>
                    <input type="text" class="form-control col-9 ml-2" id="title" aria-describedby="Title" aria-label="標題" placeholder="標題"></input>
                </div>
                <div className="formgroup text-center mt-5">
                    <textarea id="content" name="content" rows="20" cols="100" className="bg-light">
                        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                    </textarea>
                </div>
                <div className="formgroupmt-5">
                    <input type="submit" className="float-right mr-5"></input>
                </div>
            </form>
        </div>
    );
}

export default CreateTopic