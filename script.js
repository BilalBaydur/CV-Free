

window.addEventListener("load", (event) => {
    //Html içindeki başlıklar tespit ediliyor
    let HtmlCaptionist = document.getElementsByClassName("XmlCaption");  
     //CV'nin görüntüleme dilini belirliyoruz  
    let lang = SettingData["Lang"];        
    let LangData = SettingData["Languages"].find(x=>x.Lang == lang);        
    console.log(LangData)

    //Başlıklar istenen dile göre ayarlıyoruz
    for (let index = 0; index < HtmlCaptionist.length; index++) {
        const element = HtmlCaptionist[index];
        CreateElement(element, LangData);
    }

    //Html içindeki Json ile ilişkilendirilen nesneler alınıyor 
    let HtmlElementList = document.getElementsByClassName("XmlData");        

    //Html dosyasından tespit edilen nesneler içinde dönüyoruz. 
    for (let i = 0; i < HtmlElementList.length; i++) {            
        CreateElement(HtmlElementList[i], LangData.CvData);                          
    }    
  });

  




  function CreateElement(htmlElement, data){
    
    if(htmlElement.className.indexOf("XmlLink") > -1){        
        let url = data[htmlElement.id];
        htmlElement.innerHTML = "<a   href=\"" + url + "\" target=\"_blank\">" + url + "</a>";   

    }else  if(htmlElement.className.indexOf("XmlText") > -1){
        htmlElement.innerHTML = data[htmlElement.id];            
    }
    else if(htmlElement.className.indexOf("XmlImg") > -1){
        htmlElement.src = data[htmlElement.id];            
    }
    else if(htmlElement.className.indexOf("XmlList") > -1){
        let list = data[htmlElement.id];

        for (let j = 0; j < list.length; j++) {                       
            let el = document.createElement("li");
            el.innerHTML = list[j];
            htmlElement.appendChild(el);
        }
    }
    else if(htmlElement.className.indexOf("XmlGroup") > -1){        
        let groupConst = document.getElementById(htmlElement.id);

        let groupInnerHtml = groupConst.innerHTML;
        
        groupConst.innerHTML = "";
        
        let listelement =  data[htmlElement.id];              
        
        for (let x = 0; x < listelement.length; x++) { 
        
            let div = document.createElement("div");
            div.innerHTML = groupInnerHtml;

            let groupTextElemens = div.getElementsByClassName("XmlText");
            
            for (let y = 0; y < groupTextElemens.length; y++) {                
                CreateElement(groupTextElemens[y], listelement[x]);                     
            }

            let groupLinkElemens = div.getElementsByClassName("XmlLink");
            
            for (let y = 0; y < groupLinkElemens.length; y++) {                
                CreateElement(groupLinkElemens[y], listelement[x]);                     
            }            

            let groupListElemens = div.getElementsByClassName("XmlList");
            
            for (let y = 0; y < groupListElemens.length; y++) {                
                CreateElement(groupListElemens[y], listelement[x]);                     
            }            

            groupConst.appendChild(div)  ;            
        } 
        
        
    }
  }
  