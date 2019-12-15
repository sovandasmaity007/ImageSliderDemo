import { BASE_URL, Time_out } from './configUrl'

class WS_Home {
    //userName, passWord
    //   body: JSON.stringify({
    //     "email":"chris.p.bacon@nopstation.com",
    //     "password":"123456"
    //   }),
    userAttributes = async () => {
        try {
            let response = await fetch(BASE_URL + USER_ATTRIBUTES, {
                method: 'GET',
                timeout: Time_out,
                headers: {
                    "NST": NST_VAL,
                    "DeviceId": "001faebc1vdvdvf794facghjkghgh",
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify({
                //     "FirstName": "Sovan",
                //     "LastName": "Das Maity",
                //     "DateOfBirthDay": 17,
                //     "DateOfBirthMonth": 9,
                //     "DateOfBirthYear": 1992,
                //     "Email": "sovandas@matrixnmedia.com",
                //     "Company": "Brain Station 23",
                //     "Newsletter": false,
                //     "Gender": "M",
                //     "Password": "123456", 
                //     "ConfirmPassword": "123456"
                //   }),
            });

            console.log("response result: " + response)
            if (response != null) {
                let responseJson = await response.json();
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
export default new WS_Home();