const urlAPI = "http://localhost:3000/api/cameras";
const cameraAppend = document.getElementById("mainPage");

test('We have this many cameras', () => {
    async function getCameras() { 
    let response = await fetch(urlAPI);           
    let data = await response.json()                
    expect(data).toHaveLength(5);
    }
})
