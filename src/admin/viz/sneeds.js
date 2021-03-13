var dom = document.getElementById("school-details-dom");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'SpecialNeeds';

// show chart loading
myChart.showLoading()

// sneeds data fetch
// visual impairment
var VI_number = VI_num_func()
async function VI_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'Visual Impairment'}},
        });
      } catch (err) {
        console.log(err);
      }
      var VI_num = result.docs.length 
      return VI_num
}

// communication disorders
var CD_number = CD_num_func()
async function CD_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'Communication Disorders'}},
        });
      } catch (err) {
        console.log(err);
      }
      var CD_num = result.docs.length 
      return CD_num
}

// mild celebral palsy
var MCP_number = MCP_num_func()
async function MCP_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'Mild Celebral Palsy'}},
        });
      } catch (err) {
        console.log(err);
      }
      var MCP_num = result.docs.length 
      return MCP_num
}

// Hearing Impairment
var HI_number = HI_num_func()
async function HI_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'Hearing Impairment'}},
        });
      } catch (err) {
        console.log(err);
      }
      var HI_num = result.docs.length 
      return HI_num
}

// Autism
var AT_number = AT_num_func()
async function AT_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'Autism'}},
        });
      } catch (err) {
        console.log(err);
      }
      var AT_num = result.docs.length 
      return AT_num
}

// No special needs
var NoSN_number = NoSN_num_func()
async function NoSN_num_func() {
    try {
        var result = await ts1DB.find({
          selector: {Pupil_Needs: {$eq: 'None'}},
        });
      } catch (err) {
        console.log(err);
      }
      var NoSN_num = result.docs.length 
      return NoSN_num
    }

async function loader(){ 
  VI_number = await VI_num_func()
  HI_number = await HI_num_func()
  CD_number = await CD_num_func()
  AT_number = await AT_num_func()
  MCP_number = await MCP_num_func()
  NoSN_number = await NoSN_num_func()
    myChart.setOption({
      series: {
        data: [
            {value: VI_number, name: 'Visual Impairment'},
            {value: HI_number, name: 'Hearing Impairment'},
            {value: CD_number, name: 'Communication Disorder'},
            {value: MCP_number, name: 'Mild Celebral Palsy'},
            {value: AT_number, name: 'Autism'},
            {value: NoSN_number, name: 'None'}
        ]
      }
    })
  console.log(VI_number)
console.log('We should be done now')
myChart.hideLoading()
}

loader()

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Communication Disorders','Hearing Impairment','Visual Impairment','Mild Celebral Palsy','Autism','None']
    },
    series: [
        {
            name:'Special Needs among Pupils',
            type:'pie',
            radius: ['30%', '90%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}