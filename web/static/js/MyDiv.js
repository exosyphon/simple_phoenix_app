import BtnA from "./components/BtnA"
import BtnB from "./components/BtnB"
import Actions from "./Actions"
import TheStore from "./stores/TheStore"


export default React.createClass({
    render(){
        return (
            <div> This holds our buttons! <br />
                <BtnA />  <BtnB />
            </div>
        )
    }
})
