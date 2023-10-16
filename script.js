window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    let url = "İnformation.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
        //console.log(data);
        let parser = new DOMParser();
        //xml okunuyor
        let xml = parser.parseFromString(data, "application/xml");        
        
        //Html içindeki xml ile ilişkilendirilen nesneler alınıyor 
        let HtmlElementList = document.getElementsByClassName("XmlData");        

        //Html dosyasından tespit edilen nesneler içinde dönüyoruz. 
        for (let i = 0; i < HtmlElementList.length; i++) {            
            CreateElement(HtmlElementList[i], xml);                          
        }

    });
  });


  function CreateElement(htmlElement, xml){

    if(htmlElement.className.indexOf("XmlLink") > -1){
        console.log(htmlElement)
        let url = xml.getElementsByTagName(htmlElement.id)[0].innerHTML;
        htmlElement.innerHTML = "<a   href=\"" + url + "\" target=\"_blank\">" + url + "</a>";   

    }else  if(htmlElement.className.indexOf("XmlText") > -1){
        htmlElement.innerHTML = xml.getElementsByTagName(htmlElement.id)[0].innerHTML;            
    }
    else if(htmlElement.className.indexOf("XmlList") > -1){
        let list = xml.getElementsByTagName(htmlElement.id)[0];
        
        for (let j = 0; j < list.childElementCount; j++) {
            const XmlElement = list.children[j];            

            let el = document.createElement("li");
            el.innerHTML = XmlElement.innerHTML;
            htmlElement.appendChild(el);
        }
    }else if(htmlElement.className.indexOf("XmlGroup") > -1){
        console.log(htmlElement.id)
        let groupConst = document.getElementById(htmlElement.id);

        let groupInnerHtml = groupConst.innerHTML;
        
        groupConst.innerHTML = "";
        
        let listelement = xml.getElementsByTagName(htmlElement.id)[0];               
        for (let x = 0; x < listelement.childElementCount; x++) { 
        
            let div = document.createElement("div");
            div.innerHTML = groupInnerHtml;

            let groupTextElemens = div.getElementsByClassName("XmlText");
            
            for (let y = 0; y < groupTextElemens.length; y++) {                
                CreateElement(groupTextElemens[y], listelement.children[x]);                     
            }

            let groupLinkElemens = div.getElementsByClassName("XmlLink");
            
            for (let y = 0; y < groupLinkElemens.length; y++) {                
                CreateElement(groupLinkElemens[y], listelement.children[x]);                     
            }            

            let groupListElemens = div.getElementsByClassName("XmlList");
            
            for (let y = 0; y < groupListElemens.length; y++) {                
                CreateElement(groupListElemens[y], listelement.children[x]);                     
            }            

            groupConst.appendChild(div)  ;            
        } 
        
        
    }
  }
  