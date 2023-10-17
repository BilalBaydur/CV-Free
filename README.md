# CV-Free
Bu proje ile istediğiniz dilde aşağıdaki şablondaki gibi CV oluşturabilirsiniz. Şuan için Türkçe ve İngilizce için gerekli ayarlamalar yapılmış durumda ama isterseniz, istediğiniz dilleri ekleyerek zenginleştirebilirsiniz.

![image](https://github.com/BilalBaydur/CV-Free/assets/5845574/763b6f31-05cd-4a94-baa3-b76c1adec3e8)

# Information.js
Bu dosyayı kullanarak Cv'nin hangi dilde görüntüleneceğini ve ilgili dildeki içerikleri oluşturabilir veya düzenleyebilirsiniz. <br/>
````
 const SettingData = {
      Lang:"TR", //TR veya EN değerlerini atayarak hangi dilde görüntülenceğini belirleyebilirsiniz.
      Languages:[//Bu kısımda Cv içinde geçen başlıkları ilgili dile göre ayarlıyoruz.
        {
          Lang:"TR",
          PersonelInformationCaption:"KİŞİSEL BİLGİLER",
          ContactCaption:"İLETİŞİM",
          SkillsCaption:"YETENEKLER",
          ExperiencesCaption:"DENEYİMLER",
          EducationsCaption:"EĞİTİM BİLGİLERİ",
          ForeignLanguageCaption:"YABANCI DİL",
          SocialMediaCaption:"SOSYAL MEDYA",
          GenderCaption:"Cinsiyet",
          MilitaryCaption:"Askerlik",
          NationalityCaption:"Uyruk",
          DriverCaption:"Sürücü Belgesi",
          EMailCaption:"E-Posta",
          PhoneCaption:"Telefon",
          AddressCaption:"Adres",
          CvData:CvDataTR
        },
````
Biraz javascript ve html biliyorsanız, istediğiniz düzenlemeleri rahatlıkla yapabilir veya yeni bölümler ekleyebilirsiniz. Eğer yeni bölümlere ihtiyacım yok diyorsanız yapmanız gereken tek şey <b>Information.js</b> dosyasının içeriğini düzenlemek, kendinize göre ayarlamak olacaktır. 
