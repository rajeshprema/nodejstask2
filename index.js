 const express = require("express");
const path = require("path")
 const dirPath = path.join(__dirname,"hall_ids")
const app = express();
 app.use(express.json())
// //app.use(bodyParser.json());

// //app.get("/sampleFile", (req, res) => {
//  // res.send({ raj: "raj" })

  //  const customer_ids = [
  //    {
  //      customer_id: 1,
  //      customer_name: "name",
  //      customer_address: "address",
  //      booked_id: "",
  //    },
  //  ];

   const hallData = [
     {
       hall_id: 1,
       Room_Name: 44,
       available_now: "false",
       hall_size: "w*l*b",
       stage_size: "w*l*b",
       seats: 50,
       price_per_hour: "800",
       Address: "coimbatore",
     },
     {
       hall_id: 2,
       Room_Name: 40,
       available_now: "false",
       hall_size: "w*l*b",
       stage_size: "w*l*b",
       seats: 100,
       price_per_hour: "1500",
       Address: "Coimbatore",
     },
     {
       hall_id: 3,
       Room_Name: 46,
       available_now: "false",
       hall_size: "w*l*b",
       stage_size: "w*l*b",
       seats: 50,
       price_per_hour: "1500",
       Address: "chennai",
     },
     {
       hall_id: 4,
       Room_Name: 44,
       available_now: "false",
       hall_size: "w*l*b",
       stage_size: "w*l*b",
       seats: 50,
       price_per_hour: "1500",
       Address: "Erode",
     },
     {
       hall_id: 5,
       Room_Name: 43,
       available_now: "true",
       hall_size: "w*l*b",
       stage_size: "w*l*b",
       seats: 80,
       price_per_hour: "3000",
       Address: "Erode",
     },
   ];
app.get("/hall/all", (req, res) => {
  const { available_now, Address,  } = req.query
    
  let returnData = hallData;
  if (req.query) {
    if (available_now) {
      returnData = returnData.filter((val) => val.available_now === available_now);

    }
    if (Address) {
      returnData = returnData.filter((val) => val.Address === Address);
    }
     if (available_now) {
       returnData = returnData.filter((val) => val.available_now === available_now); 
    }
  }
  res.json({ data: returnData });

  app.get("hall/Room_Name", (req, res) => {
    const { Room_Name } = req.params;
    res.status(200).send(`the parameter is ${Room_Name}`)
   res.send("got data")
})
})


 app.listen(9000,()=>console.log('server started in localhost:9000'))