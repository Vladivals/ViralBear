import logo from './logo.svg';
import './Application.css';
import React from "react";
import axios from 'axios'
import { withRouter } from "react-router-dom";



import {useState,useCallback, useEffect,useRef} from 'react'

  
  
const Application = (props) => {
 
  const [title,setTitle]=useState("")
  const[description, setDescription]=useState("")
  const[tags,setTags]=useState("")
  
  const videoId = useRef()
  const [city,setCity]=useState("")
  const [country,setCountry]=useState("")
  const [category,setCategory]=useState("")
  const[date,setDate]=useState("")
 const [demoSearch,setDemoSearch]=useState('')
  const [videoLink,setVideoLink]=useState("")
  const [search,setSearch]=useState("")
  const [VideoData,setVideoData]=useState([])
  const[lastVideo,setLastVideo]=useState([])
  const [displayOfLast,setDisplayOfLast]=useState('block')
  const[displayFilter,setDisplayFilter]=useState('none')
  const[fileVideo,setFileVideo]=useState('')
  const [filePhoto, setFilePhoto]=useState('')
  const [downloadVideo,setDownloadVideo]=useState("")
  const [downloadPhoto,setDownloadPhoto]=useState("")
  const [displayWindow,setDisplayWindow]=useState("none")
  const[textVideo,setTextVideo]=useState('')
  const [textPhoto,setTextPhoto]=useState('')
  const [lastModif,setLastModif]=useState('')
  const [brandSafe,setBrandSafe]=useState(0)
  const [upDateVideoCheck,setUpdateVideoCheck]=useState('')
  const [upDatePhotoCheck,setUpdatePhotoCheck]=useState('')
  const [finish,setFinish]=useState('')
  const [complete,setComplete]=useState("Отмечено false")
  const [displayAlert,setDisplayAlert]=useState("none")
  const [diap,setDiap]=useState('')
  
const ref=useRef(null)
  



  const useData=useEffect(()=>{
    try{
    axios.post("https://back.viralbear.media/alldata").then(res=>{
    setVideoData(res.data)
    console.log("рез дата",res.data)
    setLastVideo([res.data[res.data.length-1]])
    // if (res.data[0]._id){
    // setcountBool(1)
    // }
    
    
   
    
    
    
    
  })}catch(e){alert(e.message)}},[setVideoData])

console.log(VideoData)
console.log("Последнее видео", lastVideo)
const useDisplay=useEffect(()=>{
  if (search){
    setDisplayFilter("block")
    setDisplayOfLast("none")
  }
 
  else{setDisplayFilter("none")
    setDisplayOfLast("block")}
})

const VideoInfo=({id,videoCreateDate, lastModif,brandSafe,mrss,mrss2,title,description,tags,city,country,category,date,videoId,videoLink,downloadVideo,downloadPhoto})=>{
 
 const[changeTitle,setChangeTitle]=useState(title)
 const[changeDescription,setChangeDescription]=useState(description)
 const[changeTags,setChangeTags]=useState(tags)
 const[changeCity,setChangeCity]=useState(city)
 const[changeCountry,setChangeCountry]=useState(country)
 const[changeCategory,setChangeCategory]=useState(category)
 const[changeDate,setChangeDate]=useState(date)
 const[changeVideoId,setChangeVideoId]=useState(videoId)
 const[changeVideoLink,setChangeVideoLink]=useState(videoLink)
 const[changeFileVideo,setChangeFileVideo]=useState('')
 const[changeFilePhoto,setChangeFilePhoto]=useState('')
 const[changeDownloadVideo,setChangeDownloadVideo]=useState(downloadVideo)
 const[changeDownloadPhoto,setChangeDownloadPhoto]=useState(downloadPhoto)
 const[changeLastModif,setChangeLastmodif]=useState('')
 const [changeTextVideo,setChangeTextVideo]=useState(0)
 const [changeTextPhoto,setChangeTextPhoto]=useState(0)
const [brand,setBrand]=useState('')
const [brandSafeUpdate,setBrandSafeUpdate]=useState(brandSafe)
const [deleteAccept,setDeleteAccept]=useState("none")


const brandChech=useEffect(()=>{
if (brandSafe==1){
  setBrand('true')
}
if(brandSafe==0){
  setBrand('false')
}

})
 
 
 





 const deleteFile=useCallback(async()=>{
  try{
  
    console.log("ssdsd")
  
// const dataOfVideo=new FormData()
// dataOfVideo.append("title", title)
// dataOfVideo.append("description", description)
// dataOfVideo.append("tags", tags) 
// dataOfVideo.append("city", city) 
// dataOfVideo.append("country", country) 
// dataOfVideo.append("category", category) 
// dataOfVideo.append("date", date) 
// dataOfVideo.append("videoId", videoId) 
// dataOfVideo.append("videoLink", videoLink) 
console.log(title)
const ObjData={
  id
}
    
    
    await axios.post('https://back.viralbear.media/delete',ObjData,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
  .then(res=>{
     console.log(res.data)
    
    //  setTimeout(()=>window.location.reload(),1000)
    axios.post("https://back.viralbear.media/alldata").then(res=>{
      setVideoData(res.data)
      setLastVideo([res.data[res.data.length-1]])})
      // setTimeout(()=>{if (res.data[0]._id){
      //   setcountBool(1)
      //   }},3000)
      alert("Данные удалены")
      
     
      // window.location.reload()
    
  });
  }catch(e){
    alert(e.message)
    
  }
})



 const changeSendData=useCallback(async()=>{
  try{
    console.log(changeDate.split(''))
    
    console.log("ssdsd")
  
// const dataOfVideo=new FormData()
// dataOfVideo.append("title", title)
// dataOfVideo.append("description", description)
// dataOfVideo.append("tags", tags) 
// dataOfVideo.append("city", city) 
// dataOfVideo.append("country", country) 
// dataOfVideo.append("category", category) 
// dataOfVideo.append("date", date) 
// dataOfVideo.append("videoId", videoId) 
// dataOfVideo.append("videoLink", videoLink) 
console.log(title)
const ObjData={
  id,changeTitle,changeDescription,videoCreateDate, brandSafeUpdate,mrss,mrss2,changeTags,changeCity,changeCountry,changeCategory,changeDate,changeVideoId,changeVideoLink,changeDownloadVideo,changeDownloadPhoto,changeLastModif
}
    
    
    await axios.post('https://back.viralbear.media/changeData',ObjData,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
  .then(res=>{
   


    
     console.log(res.data)
    
    //  setTimeout(()=>window.location.reload(),1000)
    axios.post("https://back.viralbear.media/alldata").then(res=>{
      setVideoData(res.data)
      setLastVideo([res.data[res.data.length-1]])})
      // setTimeout(()=>{if (res.data[0]._id){
      //   setcountBool(1)
      //   }},3000)
      alert("Данные изменены")
      
      // window.location.reload()
    
  });
  }catch(e){
    alert(e.message)
    
  }
})


const changeGetVideo=useCallback(async()=>{
  const dataOfVideo=new FormData()
  dataOfVideo.append("video", changeFileVideo)
  setChangeTextVideo("Загрузка..")
  
  await axios.post('https://back.viralbear.media/changeVideo', dataOfVideo,{
    headers:{
      'content-type': 'multipart/form-data'
    }
  })
.then(res=>{
  setChangeDownloadVideo(res.data)
alert('Нажмите <Сохранить>')
  setChangeTextVideo("Загрузка завершена")
})

})



const changeGetPhoto=useCallback(async()=>{
  const dataOfVideo=new FormData()
  dataOfVideo.append("photo", changeFilePhoto)
  setChangeTextPhoto("Загрузка..")
 
   
  await axios.post('https://back.viralbear.media/changePhoto', dataOfVideo,{
    headers:{
      'content-type': 'multipart/form-data'
    }
  })
.then(res=>{
  setChangeDownloadPhoto(res.data)
  alert('Нажмите <Сохранить>')
  setChangeTextPhoto("Видео добавлено 😊")

})
})


 
 
 
 
 
 
  return(

    <div style={{
      transform:"translate(-200px,0px)"
    }}>
<div style={{
  display:"flex",
  marginTop: "2vh",
  marginBottom: "2vh"

}}>
  <div><img src={downloadPhoto} alt="" style={{width:"100px",height:"auto",border:'2px solid black'}} /></div>
<table style={{
 
tableLayout:"fixed",
width:"500px",
height:"200px",

}}>
<tr>
    
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Title:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{title}</td>

    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }} >Description:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{description}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Tags:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{tags}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }} >City:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{city}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Country:</td>
<td style={{wordWrap:"break-word",textAlign:"left"}}>{country}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Category:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{category}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Date:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}>{date}</td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Video ID:</td>
    <td style={{wordWrap:"break-word",textAlign:"left"}}style={{wordWrap:"break-word",display:"flex",justifyContent:"flex-start"}}>{videoId}</td>
    </tr><br />
      <tr>
      <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Video Link:</td>
      <td style={{wordWrap:"break-word",textAlign:"left"}}>{videoLink}</td>
      </tr><br />



      <tr>
      <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>It is a brand-safe video?</td>
      <td style={{wordWrap:"break-word",textAlign:"left"}}>{brand}</td>
      </tr><br />

      <tr>
      <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Last Modified:</td>
      <td style={{wordWrap:"break-word",textAlign:"left"}}>{lastModif}</td>
      </tr><br />
    
    
    <tr>
      <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Video Download Link:</td>
      <td style={{wordWrap:"break-word",display:"flex",justifyContent:"flex-start",textAlign:"left"}}><a href={downloadVideo}>Download</a></td>
    </tr><br />
    <tr>
    <td style={{
      textAlign:"left",
      paddingRight:'15px'
    }}>Photo Download Link:</td>
    <td style={{wordWrap:"break-word",display:"flex",justifyContent:"flex-start",textAlign:"left"}}><a href={downloadPhoto}>Download</a></td>
    </tr><br />
    
 



</table>


</div>










       
       
       <button onClick={()=>{setDisplayWindow("block")}}>Редактировать данные </button>&nbsp;
       
       <button onClick={()=>{
         console.log('Нажато')
         setDeleteAccept("block")
      }}>Удалить</button>
<div style={{
  position:'absolute',
  left:"-300px",
  
  top:"280px",
  display:deleteAccept,
  background:"#3e88ac",
  padding:"20px"
 
}}>Вы уверены, что хотите удалить это видео?<br />
<button onClick={deleteFile}>Да</button>&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>{setDeleteAccept("none")}}>Нет</button></div>
       <div  style={{

position:'absolute',
left:"-400px",

top:"30px",
display:displayWindow,
background:"#3e88ac",
padding:"20px"

       }}id="windowChange">

<div id="form">
        <div style={{
          display:"flex",
          justifyContent:"flex-end",
          color:"white",
          fontSize:"30px",
          fontWeight:'bold',
          cursor:"pointer"

        }} onClick={()=>{
          setDisplayWindow("none")
        }}>X</div>
        <table style={{ borderCollapse: "inherit", borderSpacing:"5px"}}>
          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Title</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input size="51" id="title" type="text"  textAlign="left" name="title" defaultValue={title} onChange={(e)=>{
          setChangeTitle(e.target.value)
        }}></input></td>
          </tr>

          <tr>
            <td>Description</td>
            <td>
            <textarea style={{
          resize:"none"
        }} id="description" type="text" defaultValue={description}  name="description" onChange={(e)=>{
          setChangeDescription(e.target.value)
        }} cols="50" rows="10"></textarea>
            </td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Tags</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input size="51" id ='tags'type="text" name="tags" defaultValue={tags} onChange={(e)=>{
          setChangeTags(e.target.value)
        }} ></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>City</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input  id='city' type="text" name="city" defaultValue={city} onChange={(e)=>{
          setChangeCity(e.target.value)
        }}></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Country</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input id='country' type="text" name="country" defaultValue={country} onChange={(e)=>{
          setChangeCountry(e.target.value)
        }}></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Category</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input id="category" type="text" name="category" defaultValue={category} onChange={(e)=>{
          setChangeCategory(e.target.value)
        }}></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Date</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input id='date' type="date" name="date" defaultValue={date} onChange={(e)=>{
          setChangeDate(e.target.value)
        }}></input></td>
          </tr>

          <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>Is it a brand safe video? </td>
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <span id='brandSafeTrue' onClick={()=>{
             alert('brand-safe теперь true, Нажмите «Сохранить»')
              setBrandSafeUpdate(1)
              }}>true</span>/<span id='brandSafeFalse' onClick={()=>{
                alert('brand-safe теперь false, Нажмите «Сохранить»')
                setBrandSafeUpdate(0)
                }}>false</span>
            
            
            
           </td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Video id</td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input id ="videoid" type="text" defaultValue={videoId} name="video_id" onChange={(e)=>{
          setChangeVideoId(e.target.value)
        }} ></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>Video link </td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}><input id="videolink" size="40"  type="text" defaultValue={videoLink}name="video_link" onChange={(e)=>{
          setChangeVideoLink(e.target.value)
        }}></input></td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>
           </td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <div><input type="file" onChange={e=>{
                  setChangeFileVideo(e.target.files[0])
                }} name="file"/>
                <button type="submit" role="button" id="buttonsend" onClick={changeGetVideo} >Upload Video</button><br />
                {changeTextVideo}
        
            </div>
           </td>
          </tr>

          <tr>
            <td style={{wordWrap:"break-word",textAlign:"right"}}>
           </td>
            <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <div ><input type="file" onChange={e=>{
                  setChangeFilePhoto(e.target.files[0])
                }} name="file"/>
                <button type="submit" role="button" id="buttonsend" onClick={changeGetPhoto}>Upload Photo</button><br />
                {changeTextPhoto}
        
           </div>
           </td>
          </tr>

          

        </table>
          
        
        <input id="bplus" type="submit" value="Сохранить" onClick={() => { setTimeout(changeSendData, setDisplayWindow("none"), 1)}}    ></input>
        
        </div>
        
    
       </div>
    </div>
    
  )
}



const filteredVideo=VideoData.filter(video=>{
  return video.data.videoId.includes(search)
})


const notif=()=>{
  getDoubleVideo()
  getDoublePhoto()

  
}
// const useThis=useEffect(()=>{

//   if(finish==true){
//     setFinish(false)
//     console.log("finish!!")
//     setTimeout(()=>{
//       sendDataDuble()
//       setFinish(false)
    
//     },10000)
    
//   }

// })















const sendDataDuble=useCallback(async()=>{
  setFinish(false)
  console.log(filePhoto)
  try{
    
    console.log("ssdsd")
  
// const dataOfVideo=new FormData()
// dataOfVideo.append("title", title)
// dataOfVideo.append("description", description)
// dataOfVideo.append("tags", tags) 
// dataOfVideo.append("city", city) 
// dataOfVideo.append("country", country) 
// dataOfVideo.append("category", category) 
// dataOfVideo.append("date", date) 
// dataOfVideo.append("videoId", videoId) 
// dataOfVideo.append("videoLink", videoLink) 
console.log(title)
setFinish(false)
const ObjData={
  title,description,tags,city,country,category,date,videoId:videoId.current,videoLink,downloadVideo,downloadPhoto,lastModif,brandSafe
}
    
    
    await axios.post('https://back.viralbear.media/data',ObjData,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
  .then(res=>{
     console.log(res.data)
     console.log(res)
     
     
     setTimeout(()=>{
       setTitle('')
       setDescription('')
       setTags('')
       setUpdateVideoCheck(0)
       setUpdatePhotoCheck(0)
       setVideoLink('')
       setCategory('')
       setCity('')
       setCountry('')
      videoId.current=String(Number(videoId)+1)

     },1500)
    //  setTimeout(()=>window.location.reload(),1000)
    axios.post("https://back.viralbear.media/alldata").then(res=>{
      setVideoData(res.data)
      setLastVideo([res.data[res.data.length-1]])})
      // setTimeout(()=>{if (res.data[0]._id){
      //   setcountBool(1)
      //   }},3000)
     
      alert("Видео в базе 😊")
      
      
      
      // window.location.reload()
    
  });
  }catch(e){
    alert(e.message)
    
  }
})


console.log()

  const sendData=useCallback(async()=>{
    if (title==='' || description==='' || tags==='' || city==='' || country==='' || category==="" || date==="" || videoId==="" || videoLink==="" || fileVideo==="" || filePhoto===""){
      return alert('Не все поля заполнены')
    }
    
     else{ 
      const date2=new Date()
      const dateDeform=String(new Date(date)).split(' ')
const deformDate=`${dateDeform[0]}, ${dateDeform[2]} ${dateDeform[1]} ${dateDeform[3]}`
       
       console.log("ssdsd")
setTextVideo('Зарузка...')
setTextPhoto('Загрузка...')
  const dataOfVideo=new FormData()
  dataOfVideo.append("title", title)
  dataOfVideo.append("description", description)
  dataOfVideo.append("tags", tags) 
  dataOfVideo.append("city", city) 
  dataOfVideo.append("country", country) 
  dataOfVideo.append("category", category) 
  dataOfVideo.append("date", deformDate) 
  dataOfVideo.append("videoId", videoId.current) 
  dataOfVideo.append("videoLink", videoLink)
  dataOfVideo.append("lastModif", lastModif)
  dataOfVideo.append('videoCreateDate', date2.toGMTString())
  dataOfVideo.append("fileVideo", fileVideo)
  dataOfVideo.append("filePhoto", filePhoto)
  dataOfVideo.append("brandSafe", brandSafe)
   
  await axios.post('https://back.viralbear.media/data', dataOfVideo,{
    headers:{
      'content-type': 'multipart/form-data'
    }
  })
.then(res=>{
  setTimeout(()=>{
    setTitle('')
    setDescription('')
    setTags('')
    setUpdateVideoCheck(0)
    setUpdatePhotoCheck(0)
    setVideoLink('')
    setCategory('')
    setCity('')
    setCountry('')
    setFilePhoto('')
    setFileVideo('')
    setDate('')
    setBrandSafe(0)
   videoId.current=String(Number(videoId)+1)
   document.getElementById('inputVideo').value=''
   document.getElementById('inputPhoto').value=''
   document.getElementById('inputDate').value=''
   document.getElementById('brandSafeCheck').checked=false
  },1500)
  console.log(res.data)
  axios.post("https://back.viralbear.media/alldata").then(res=>{
    setVideoData(res.data)
    setLastVideo([res.data[res.data.length-1]])})
    // setTimeout(()=>{if (res.data[0]._id){
    //   setcountBool(1)
    //   }},3000)
    setDisplayAlert("block")
    setTextVideo("Загрузка завершена")
    setTextPhoto('Загрузка завершена')
    
    // window.location.reload()
  
})}

  })





  const sendExcel=useCallback(async()=>{
    try{
      let ObjData
      if (diap.indexOf('-') > -1){
      console.log("ssdsd")
      const emptyDiapArray=[]
    const diapArray=diap.split('-')
    for (let i=Number(diapArray[0]); i<=Number(diapArray[1]);i++){
      emptyDiapArray.push(i)
    }
    console.log(emptyDiapArray)

  // const dataOfVideo=new FormData()
  // dataOfVideo.append("title", title)
  // dataOfVideo.append("description", description)
  // dataOfVideo.append("tags", tags) 
  // dataOfVideo.append("city", city) 
  // dataOfVideo.append("country", country) 
  // dataOfVideo.append("category", category) 
  // dataOfVideo.append("date", date) 
  // dataOfVideo.append("videoId", videoId) 
  // dataOfVideo.append("videoLink", videoLink) 
  console.log(title)
  
  ObjData={
    title,description,tags,emptyDiapArray,city,country,category,date,videoId:videoId.current,videoLink
  }
}
else{
  console.log("ssdsd")
  console.log(title)
  
  ObjData={
    title,description,diap,tags,city,country,category,date,videoId:videoId.current,videoLink
  }
}
      
      
      await axios.post('https://back.viralbear.media/exceldownload',ObjData,{
        headers:{
          'Content-Type': 'application/json',
          
        },
        responseType: 'blob'
      })
    .then(res=>{
      const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement('a');
          link.href = url;
          if (typeof window.navigator.msSaveBlob === 'function') {
              window.navigator.msSaveBlob(
                  res.data,
                  "data.xlsx"
              );
          } else {
              link.setAttribute('download', "data.xlsx");
              document.body.appendChild(link);
              link.click();
          }





       console.log(res.data)
       setTimeout(()=>{
         setTitle('')
         setDescription('')
         setTags('')
        
         setVideoLink('')
         setCategory('')
         setCity('')
         setCountry('')
         videoId.current=String(Number(videoId)+1)

       },1500)
      //  setTimeout(()=>window.location.reload(),1000)
      
      
      
    });
    }catch(e){
      alert(e.message)
      
    }
  })

const searchVideo=(e)=>{
setDemoSearch(e.target.value)



}

  





const getDoubleVideo=useCallback(()=>{
  
try{
  let A=''
  var url1 = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${fileVideo.name}`;
  setTextVideo('Создана ссылка')
  
  var xhr1 = new XMLHttpRequest();
  setTextVideo('Создан запрос')
  xhr1.open("GET", url1);
   setTextVideo('Отправлен запрос')
  
  xhr1.setRequestHeader("Accept", "application/json");
  xhr1.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  setTextVideo('Авторизация')
  
  xhr1.onreadystatechange = function () {
     if (xhr1.readyState === 4) {
      setTextVideo('Получен ответ')
        setTextVideo(xhr1.status);
        console.log(JSON.parse(xhr1.responseText));
        // const [link,setLink]=useState('')
        A=JSON.parse(xhr1.responseText).href
        setTimeout(async()=>{
  var data3 = new FormData()
data3.append('file', fileVideo)
data3.append('user', 'hubot')
setTextVideo('Файл помещен в контейнер и отправлен')
try{
  await axios.post(A,data3).then(response=>{
    setTextVideo("Получен ответ от сервера", response)
console.log(response)
try{
  var url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${fileVideo.name}`;
  setTextVideo('Создана ссылка для запроса на скачивания')

  var xhr = new XMLHttpRequest();
  setTextVideo('Создан запрос на ссылку для скачивания')
  xhr.open("GET", url);
  
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        setTextVideo(xhr.status);
        console.log(xhr.responseText);
        // window.open(JSON.parse(xhr.responseText).href)
        setDownloadVideo(JSON.parse(xhr.responseText).href)
        setFinish(true)
        setTextVideo('Получена ссылка на скачивание')
        setFileVideo('')
     }};
  
  xhr.send();}catch(e){alert(e)}
  //alert("Видео сохранено в яндекс.диске и получена ссылка для сохранения в бд")
  

})}catch(e){alert(e)}},6000)
     }
     
      
     
     
    
    };
     
  
   xhr1.send();
  
  
  

//   fetch(link, {
//   method: 'POST',
//   body: data
// })


}catch(e){
  alert(e.message)
}
})






























const getVideo=useCallback(()=>{
  setUpdateVideoCheck(1)
try{
  let A=''
  var url1 = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${fileVideo.name}`;
  setTextVideo('Создана ссылка')
  
  var xhr1 = new XMLHttpRequest();
  setTextVideo('Создан запрос')
  xhr1.open("GET", url1);
   setTextVideo('Отправлен запрос')
  
  xhr1.setRequestHeader("Accept", "application/json");
  xhr1.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  setTextVideo('Авторизация')
  
  xhr1.onreadystatechange = function () {
     if (xhr1.readyState === 4) {
      setTextVideo('Получен ответ')
        setTextVideo(xhr1.status);
        console.log(JSON.parse(xhr1.responseText));
        // const [link,setLink]=useState('')
        A=JSON.parse(xhr1.responseText).href
        setTimeout(async()=>{
  var data3 = new FormData()
data3.append('file', fileVideo)
data3.append('user', 'hubot')
setTextVideo('Файл помещен в контейнер и отправлен')
try{
  await axios.post(A,data3).then(response=>{
    setTextVideo("Получен ответ от сервера", response)
console.log(response)
try{
  var url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${fileVideo.name}`;
  setTextVideo('Создана ссылка для запроса на скачивания')

  var xhr = new XMLHttpRequest();
  setTextVideo('Создан запрос на ссылку для скачивания')
  xhr.open("GET", url);
  
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        setTextVideo(xhr.status);
        console.log(xhr.responseText);
        // window.open(JSON.parse(xhr.responseText).href)
        setDownloadVideo(JSON.parse(xhr.responseText).href)
        setFinish(true)
        setTextVideo('Получена ссылка на скачивание')
        setFileVideo('')
     }};
  
  xhr.send();}catch(e){alert(e)}
  //alert("Видео сохранено в яндекс.диске и получена ссылка для сохранения в бд")
  

})}catch(e){alert(e)}},6000)
     }
     
      
     
     
    
    };
     
  
   xhr1.send();
  
  
  

//   fetch(link, {
//   method: 'POST',
//   body: data
// })


}catch(e){
  alert(e.message)
}
})




const getDoublePhoto=useCallback(()=>{
  
try{
  let A=''
  var url1 = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${filePhoto.name}`;
  setTextPhoto("Создана ссылка")
  
  var xhr1 =  new XMLHttpRequest();
  setTextPhoto("Создан запрос")
   xhr1.open("GET", url1);
  
  xhr1.setRequestHeader("Accept", "application/json");
  xhr1.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  setTextPhoto("Авторизация")
  
  xhr1.onreadystatechange = function () {
     if (xhr1.readyState === 4) {
        setTextPhoto(xhr1.status);
      console.log(JSON.parse(xhr1.responseText));
        // const [link,setLink]=useState('')
        A=JSON.parse(xhr1.responseText).href
        setTimeout(async()=>{
          var data3 = new FormData()
        data3.append('file', filePhoto)
        data3.append('user', 'hubot')
        setTextPhoto("Файл помещен в контейнер и отправлен")
        try{
          await axios.post(A,data3).then(response=>{
            
        console.log(response)
        try{
          var url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${filePhoto.name}`;
          setTextPhoto("Создана ссылка для получения ссылки на скачивание")
        
          var xhr = new XMLHttpRequest();
          setTextPhoto("Создана запрос на ссылку для скачивания")
          xhr.open("GET", url);
          
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
         
          
          xhr.onreadystatechange = function () {
             if (xhr.readyState === 4) {
                setTextPhoto(xhr.status);
                setTextPhoto("Получена ссылка на скачивание")
                console.log(xhr.responseText);
                // window.open(JSON.parse(xhr.responseText).href)
                setDownloadPhoto(JSON.parse(xhr.responseText).href)
                
                setFileVideo('')
             }};
          
          xhr.send()
         
          
          
          ;}catch(e){alert(e.message)}
         
          //alert("Изображение сохранено в яндекс.диске и получена ссылка для сохранения в бд")
         
        
        })}catch(e){alert(e.message)}},6000)
     }
     
      
     
     
    
    };
     
  
  xhr1.send();
  
  
  

//   fetch(link, {
//   method: 'POST',
//   body: data
// })


}
catch(e){
  alert(e.message)
}



  
})


































const getPhoto=useCallback(()=>{
  setUpdatePhotoCheck(1)
try{
  let A=''
  var url1 = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${filePhoto.name}`;
  setTextPhoto("Создана ссылка")
  
  var xhr1 =  new XMLHttpRequest();
  setTextPhoto("Создан запрос")
   xhr1.open("GET", url1);
  
  xhr1.setRequestHeader("Accept", "application/json");
  xhr1.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
  setTextPhoto("Авторизация")
  
  xhr1.onreadystatechange = function () {
     if (xhr1.readyState === 4) {
        setTextPhoto(xhr1.status);
      console.log(JSON.parse(xhr1.responseText));
        // const [link,setLink]=useState('')
        A=JSON.parse(xhr1.responseText).href
        setTimeout(async()=>{
          var data3 = new FormData()
        data3.append('file', filePhoto)
        data3.append('user', 'hubot')
        setTextPhoto("Файл помещен в контейнер и отправлен")
        try{
          await axios.post(A,data3).then(response=>{
            
        console.log(response)
        try{
          var url = `https://cloud-api.yandex.net/v1/disk/resources/download?path=${filePhoto.name}`;
          setTextPhoto("Создана ссылка для получения ссылки на скачивание")
        
          var xhr = new XMLHttpRequest();
          setTextPhoto("Создана запрос на ссылку для скачивания")
          xhr.open("GET", url);
          
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Authorization", "y0_AQAAAABjza-iAADLWwAAAADLVM-3J8vIJ5VOS3uirRWCoWNMwTJrk2Y");
         
          
          xhr.onreadystatechange = function () {
             if (xhr.readyState === 4) {
                setTextPhoto(xhr.status);
                setTextPhoto("Получена ссылка на скачивание")
                console.log(xhr.responseText);
                // window.open(JSON.parse(xhr.responseText).href)
                setDownloadPhoto(JSON.parse(xhr.responseText).href)
                
                setFileVideo('')
             }};
          
          xhr.send()
         
          
          
          ;}catch(e){alert(e.message)}
         
          //alert("Изображение сохранено в яндекс.диске и получена ссылка для сохранения в бд")
         
        
        })}catch(e){alert(e.message)}},6000)
     }
     
      
     
     
    
    };
     
  
  xhr1.send();
  
  
  

//   fetch(link, {
//   method: 'POST',
//   body: data
// })


}
catch(e){
  alert(e.message)
}



  
})



const ShowUi=({lastVideoId})=>{
  
  
if(lastVideoId){
  videoId.current=String(Number(lastVideoId.videoId)+1)
  console.log('ЛАСТ ВИДЕО ЛАСТ ЛАСТ',lastVideoId)
return(
  
      <input id ="videoid" type="text" size="15" defaultValue={videoId.current} name="video_id" onChange={(e)=>{
          videoId.current = e.target.value
        }} ></input>
  
)

}

 return(<div>
   <input id ="videoid" type="text" size="15" defaultValue={videoId} name="video_id" onChange={(e)=>{
          videoId.current = e.target.value
        }} ></input><br /><br />

 </div>)




}
const Showif=({videoData})=>{
 console.log(videoData)
if (videoData){
    return(
      <div>
<div style={{
  display:displayOfLast
}}>
{

lastVideo.map((e)=>{
  return <VideoInfo id={e._id}  videoCreateDate={e.data.videoCreateDate}  brandSafe={e.data.brandSafe}   mrss={e.data.mRSS} mrss2={e.data.mRSS2} lastModif={e.data.lastModif} title={e.data.title} description={e.data.description} category={e.data.category} city={e.data.city} country={e.data.country}  date={e.data.date}  tags={e.data.tags} videoId={e.data.videoId} videoLink={e.data.videoLink} downloadVideo={e.data.downloadVideo} downloadPhoto={e.data.downloadPhoto}/>
})}
</div>
<div style={{
  display:displayFilter
}}>
{

filteredVideo.map((e)=>{
  return <VideoInfo id={e._id}   videoCreateDate={e.data.videoCreateDate}  brandSafe={e.data.brandSafe}    lastModif={e.data.lastModif} mrss={e.data.mRSS} mrss2={e.data.mRSS2} title={e.data.title} description={e.data.description} category={e.data.category} city={e.data.city} country={e.data.country}  date={e.data.date}  tags={e.data.tags} videoId={e.data.videoId} videoLink={e.data.videoLink} downloadVideo={e.data.downloadVideo} downloadPhoto={e.data.downloadPhoto}/>
})}
</div>
</div>

    )
}
else{
  return(<div>Empty DataBase</div>)
}
  
}



console.log('браднсейф',brandSafe)



  return (
    <div className="App">
    <div onClick={()=>{setDisplayAlert("none")}} style={{
      position:'absolute',
      left:"400px",
      cursor:'pointer',
      fontSize:"40px",
      top:"400px",
      display:displayAlert,
      zIndex:"999",
      background:"#3e88ac",
      padding:"20px"
    }}>Данные успешно сохранены!<br/>Нажмите на это окно, чтобы закрыть его.</div>
      <div id="form" style={{marginTop: "2vh"}}>
      
      <table style={{ borderCollapse: "inherit", borderSpacing:"5px"}} >
      
        <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
              Title
          </td>
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
              <input required="required"  id="title" type="text" name="title" size="51" value={title} onChange={(e)=>{
                      setTitle(e.target.value)
                      }}>
              </input>
          </td>
       </tr>

       <tr style={{paddingBottom: "10px"}}>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
              Description
          </td>
          <td style={{wordWrap:"break-word",textAlign:"left",paddingBottom: "10px"}}>
          <textarea  style={{resize:"none"}} id="description" type="text"   
                    name="description" value={description} onChange={(e)=>{
          setDescription(e.target.value)
        }} cols="50" rows="10">
          </textarea>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
              
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", paddingBottom: "15px"}}>
             Video<div id="files"><input type="file" id='inputVideo' ref={ref} onChange={e=>{
              setFileVideo(e.target.files[0])}} name="file"/>
              
              <div style={{position:"absolute",width:"400px"}}>{textVideo}</div>
            </div>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
              
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", paddingBottom: "15px"}}>
            <nobr>
              Photo<div id="filesPhoto"><input id='inputPhoto' ref={ref} type="file"  onChange={e=>{
                setFilePhoto(e.target.files[0])}} name="file"/>
                
                <div style={{ position:"absolute",width:"400px"}}>{textPhoto}</div>
              </div>
            </nobr>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            Tags
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input  id ='tags'type="text" name="tags" size="51" value={tags} onChange={(e)=>{
              setTags(e.target.value)
            }} >
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
          City
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input  id='city' type="text" size="15" name="city" value={city} onChange={(e)=>{
              setCity(e.target.value)}}>
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
          Country
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input id='country' type="text" size="15" name="country" value={country} onChange={(e)=>{
              setCountry(e.target.value)}}>
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
          Category
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input id="category" type="text" size="15" name="category" value={category} onChange={(e)=>{
              setCategory(e.target.value)}}>
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
          Date
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input id='inputDate' type="date" ref={ref}  name="date" value={date} onChange={(e)=>{
              setDate(e.target.value)}}>
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
          
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", fontWeight: "bold"}}>
            Is it a brand safe video? <input type="checkbox" ref={ref} id='brandSafeCheck' onChange={(e)=>{
              if (e.target.checked){
                console.log('Отмечено')
                setBrandSafe(1)
                console.log('БРЕНД',brandSafe)
              } else {
                console.log('Не отмечено')
                setBrandSafe(0)
                console.log('БРЕНД',brandSafe)
              }
            }}/>
         </td>
          {/* <td style={{wordWrap:"break-word",textAlign:"right"}}>Is it a brand safe video? </td>
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <span id='brandSafeTrue' onClick={()=>{
             console.log('SETBRAND ТЕПЕРЬ 1')
             setBrandSafe(1)
             setComplete('Отмечено true')
              }}>true</span>/<span id='brandSafeFalse' onClick={()=>{
                console.log('SETBRAND ТЕПЕРЬ 0')
                setBrandSafe(0)
                setComplete('Отмечено false')
                }}>false</span>{complete}</td> */}
                
       </tr>

       <tr style={{borderSpacing: "0 10px", borderCollapse: "separate"}}>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            Video link 
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input id="videolink"  type="text" size="40" value={videoLink}name="video_link" onChange={(e)=>{
              setVideoLink(e.target.value)
            }}>
            </input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            Video Id
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <ShowUi lastVideoId={lastVideo[0]}/>
          </td>
       </tr>
        
       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>

          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left"}}>
            <input style={{fontWeight:"bold"}} id="bplus" type="submit" value="Add a video" onClick={sendData} ></input>
          </td>
       </tr>
       
       <tr>
       
         <td> 
         <hr style={{border: "2px solid black"}} />

         </td>
         <td>
         <hr style={{border: "2px solid black"}} />

         </td>


       </tr>

       <tr style={{padding: "10px"}}>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            <nobr>Find a Video</nobr>
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", paddingBottom: "10px"}}>
            <input type="text" size="15" onChange={searchVideo} /> <button onClick={()=>setSearch(demoSearch)}>Поиск</button>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", paddingBottom: "30px"}}>
            <input type="text" onChange={(e)=>{
setDiap(e.target.value)
            }}/><input id="bplus2" type="submit" value="Render Excel file"  onClick={sendExcel} ></input>
          </td>
       </tr>

       <tr>
          <td style={{wordWrap:"break-word",textAlign:"right"}}>
            
          </td>
          
          <td style={{wordWrap:"break-word",textAlign:"left", paddingBottom: "10px"}}>
              {props.exitBtn()}
          </td>
       </tr>

     </table>
     
        </div>
     
     
        <div id="videos">
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-m2Xde_W-U8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

          <Showif videoData={lastVideo[0]}/>

        </div>

   
    </div>
  );
}




export default withRouter(Application)