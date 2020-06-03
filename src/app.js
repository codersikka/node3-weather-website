const path=require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require ('./utils/geocode.js')
const forecast = require ('./utils/forecast.js')
//asw
const app = express()

const publicdirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicdirectoryPath))
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{

    res.render('index',{

        title: 'Weather',
        name: 'ARJ'
    })
})

app.get('/about',(req,res)=>{
   
    res.render('about',{
      description: 'This is the about us page version 2',
      title: 'About me',
      name: 'ARJ'

    })
      

})

app.get('/help',(req,res)=>{

  res.render('help',{
     title: 'This is the help page',
     conclude: 'hope this was useful',
     name: 'ARJ'


  })

})

app.get('/weather',(req,res)=>{

if(!req.query.address){

   return res.send ({

            error: 'Please input an address'
         })
        }
else {
        geocode(req.query.address, (error,{latitude, longitude,location} = {})=>{

            if (error) {

            return res.send ({error}) //braces for return error
           }
        
        //forecast

        forecast(latitude, longitude, (error,callback)=>{
        
             return res.send({
             address:req.query.address,location,
             forecast: callback

             })

        })  
        /*************/

        // OUTPUT
        //    return res.send ({

        //     longitude: longitude,
        //     latitude:latitude
        //    })
        })
       }         
    
})
    // }   else {
 
//                 forecast (latitude, longitude, (error, forecastdata)={}) => {

//                     if (error){

//                         return res.send ({

//                             error: 'Low Level Error'
//                         })
//                     } else {

//                         return res.send({

//                             forecastdata: forecastdata
//                         })
//                     }
//                 }
                
//                 } 
                
//             }
                
          
//  }})      
// res.send({

// forecast: 'It is snowing',
// location: 'Phily',
// address:req.query.address

// })

    
//     const forecast = [{
//         address: 'Philadelphia',
//         temperature: '20 degree celsius'
//     },
//       { address: 'Mumbai',
//         temperature: '-10 degree celsius'
// }
// ]

// const queryFind = forecast.find((x)=> x.address === req.query.address)

// if (queryFind.length === 0){

//     res.send({

//         Error:'Address data not available'
//     })
// } else 
// return res.send ({
//     address: queryFind.address,
//     temperature: queryFind.temperature 

// })

// if(req.query.)
//     const address= addre
//     res.send([{
//         Forecast: '20 degree celsius',
//         City: 'Mumbai'

//     },
//         { 
//          Forecast:'15 degree celsius',
//          City: 'Kochi'
//         }
//     ])
// })

app.get('/product',(req,res)=>{

if(!req.query.search){

    return res.send({

        error:'Please enter a search field'
    })
}

    res.send({

product:'This is the products page'

})

})
app.get('/help/*',(req,res)=>{

    res.render('404',{

        ErrorName: 'The Help section does not have a page yet',
        title:'Help 404',
        name: 'ARJ'
    })
})
app.get('*',(req,res)=>{

    res.render('404',{

        ErrorName: 'A generic 404 Error',
        title:'404',
        name: 'ARJ'
    })
})
app.listen(3000,()=>{

    console.log('The server has just started')
})