const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json());


const newspapers = [
    {
        id:0,
        name: 'thetimes',
        link: 'https://www.thetimes.co.uk/environment/climate-change'
    },
    {
        id:1,
        name: 'gaurdian',
        link: 'https://www.theguardian.com/environment/climate-crisis'
    },
    {
        id:2,
        name: 'telegraph',
        link: 'https://www.telegraph.co.uk/climate-change'
    }
]


app.get('/', (req, res) => {
  res.send(newspapers);
})

app.post('/',(req,res)=>{
  const newNewspapers = req.body;
  newNewspapers.id = newspapers.length;
  newspapers.push(newNewspapers);


  console.log('Hit post',req.body)
  //res.send(JSON.stringify(newNewspapers));
  res.json(newNewspapers);
})

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
