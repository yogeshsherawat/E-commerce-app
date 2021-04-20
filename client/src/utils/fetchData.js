import axios from 'axios';
import Card from '../components/Card';
function getDataJSX(data) {
    return (
        <div>
            {data.map(function (ele, index) {
                return (
                    <Card key={index} title={ele.title} price={ele.price} id={ele._id}
                        image ={ele.image} category={ele.category}
                    />
                )
            })}
            
        </div>);
        }
async function getData() {
    let response = await axios.get("/items");
    let data = response.data;
    console.log(data);
    let dataJSX = getDataJSX(data);
    console.log(dataJSX);
    return dataJSX;

    
}


export default getData;