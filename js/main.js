

var app = new Vue({
    el: '#app',
    data: {
      message: '',
      partidos:[],
      candidato:{
        Sandra:'',
        Giammattei:''
      },
      
    },
    mounted() {
        axios.post('https://ws2v.tse.org.gt/api/tse/resultados', {
            PROCESO: '201902',
            TIPOELECCION:'1',
            DEP:'0',
            MUN:'0',
          })
          .then(function (response) {
            //   app._data.message =response.data.data['0'].S2;
            
            console.log(response.data.data['0']);
            var ctx = document.getElementById('myChart').getContext('2d');

            var une= response.data.data['0'].V2;
            var vamos= response.data.data['0'].V1;

            var myLineChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels:['UNE','VAMOS'],
                    datasets:[{
                        label:'Candidato a la presidencia',
                        data:[une,vamos],
                        backgroundColor:[
                            'rgba(141,220,121,0.5)',
                            'rgba(61,155,178,0.5)',
                        ]
                    }]
                },
                options: {
                    scales:{
                        YAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });

          })
          .catch(function (error) {
            console.log(error);
          });
        //   this.message = "nuevo";
    },
  });
