// เริ่มเขียนโค้ดตรงนี้
// ใช้ fetch ตาม โจทย์ 
// 
// ใช้ ฟิลเตอร์เพื่อกรองมากกว่า 17 ตัวอักษร
// แสดงผล console.log ตามมา 

let getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    
    let name = data.map(function (use) {
        return use.name
    });

    let filtername = name.filter(function (names){
        return names > 17;
    })

    console.log(filtername);
  };

  getUsers()
 