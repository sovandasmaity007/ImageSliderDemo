import { BASE_URL, Time_out, IMAGE_LIST } from './configUrl'

class WS_ImageList {

    imageList = async () => {
        console.log("response result SOVANDASMAITY-URL : " + BASE_URL + IMAGE_LIST)
        try {
            let response = await fetch(BASE_URL + IMAGE_LIST, {
                method: 'GET',
                timeout: Time_out,
                headers: {
                    "Content-Type": "application/json"
                },
            });

            //console.log("response result : " + response)
            if (response != null) {
                let responseJson = await response.json();
                console.log("response result SOVANDASMAITY : " + responseJson)
                return responseJson;
            } else {
                alert("NULL");
                return null;
            }
        } catch (err) {
            console.log("assetList error: " + err);
            //alert("Error: " + err);
            return null;
        }

    }


}
export default new WS_ImageList();