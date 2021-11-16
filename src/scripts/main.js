import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"
import { deleteRequest } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")

//Listens for the click to delete
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


//Listens for the state to change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

// Renders the whole page
const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()



