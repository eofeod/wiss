 $(document).ready(function(){
        $('.notif').css("display","none");
        $('#button-addon').on('click', function(){
            var tokenInputed = $('#tk').val();
            var tK;
            $.getJSON('https://raw.githubusercontent.com/eofeod/wiss/main/linkSumatif.json', function(data){
                var mapel = data.mapel
                
                var items = mapel.filter(function(obj){
                    
                        return obj.TOKEN == tokenInputed;
            
                })
                        tK = items[0].MAPEL;
                        tL = items[0].LINK_SOAL;
                        
                        var konf = "Anda akan Memulai Ujian "+tK+".\nTekan OK untuk Ya."
                        if(confirm(konf) == true){
                            window.location.href = tL;
                        }
                $('.notif').css("display","none");
            })
            
            $('.notif').css({"display":"block", "background-color":"rgba(200,90,10,0.4)"});
            document.getElementById('tk').select();

        })
        
    })
